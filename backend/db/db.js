import mongoose from 'mongoose'

const {Schema} = mongoose;

const urlSchema = new Schema({
    uniqueKey : String,
    og_url : [String]
})

const UrlDb = mongoose.model('urlSchemas', urlSchema);
export default UrlDb;