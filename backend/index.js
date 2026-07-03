import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import mongoose, { get } from 'mongoose';
import UrlDb from './db/db.js';
import { adler32 } from "hash-wasm";
import client from './redisConnection/redis.js';
import rateLimiter from './middleware/middleware.js';

dotenv.config()
const app = express();

mongoose.connect(process.env.MONGO_URL)

app.use(express.json());
app.use(cors());
app.use(rateLimiter);

app.get('/clear', async (req, res) => {
    await client.flushDb();
    res.send("cache cleared");
})
app.post('/', async (req, res) => {
    let { url } = req.body;
    const hashedUrl = await adler32(url);
    const frontend_url = process.env.FRONTEND_URL;
    if(!url.startsWith('http://') || !url.startsWith('https://')){
        url = 'https://'+ url;
    }
    const urlExist = await UrlDb.findOne({ og_url: url })
    if (urlExist) {
        const index_no = await UrlDb.aggregate([
            {
                $match: {
                    uniqueKey: hashedUrl
                }
            },
            {
                $project: {
                    index: { $indexOfArray: ["$og_url", url] }
                }
            }
        ])
        // console.log(index_no)
        return res.json({ message: "url created", url: `${frontend_url}/${hashedUrl}/${index_no[0].index}` });
    }

    const findIfAlreadyExist = await UrlDb.findOneAndUpdate({ uniqueKey: hashedUrl }, { $push: { og_url: [url] } })
    if (!findIfAlreadyExist) {
        const storeDb = await UrlDb.create({
            uniqueKey: hashedUrl,
            og_url: [url]
        })

        return res.json({ message: "url created", url: `${frontend_url}/${hashedUrl}/0` });
    }
    const index_no = await UrlDb.aggregate([
        {
            $match: {
                uniqueKey: hashedUrl
            }
        },
        {
            $project: {
                index: { $indexOfArray: ["$og_url", url] }
            }
        }
    ])
    // console.log("index: ", index_no.index)

    return res.json({ message: "url created", url: `${frontend_url}/${hashedUrl}/${index_no[0].index}` });
})

app.get('/:hash/:index', async (req, res) => {
    const { hash, index } = req.params;
    console.log("hash: " ,hash, " ", index)
    try {
        const data = await client.get(hash+index)
        if (data) {
            console.log("cache hit: ", data)
            return res.redirect(data);
        } 
        else {
            const getUrl = await UrlDb.findOne({ uniqueKey: hash })
            console.log("found url: ", getUrl.og_url[index]);

            if (!getUrl) return res.json({ message: "not found" })
            const redUrl = getUrl.og_url[index];

            console.log(hash+index, "- ", redUrl);
            await client.set(hash+index, redUrl)

            return res.redirect(redUrl)
        }
    } catch (error) {
        console.log(error)
    }
});

app.listen(3000, () => {
    console.log("listening on 3000")
});