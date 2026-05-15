import dotenv from 'dotenv';
dotenv.config()


import { createClient } from "redis";

const client = await createClient({
    url : process.env.REDIS_URL
});

client.on("error", (err) => {
    console.log("error in redis client", err)
})

await client.connect();

export default client;