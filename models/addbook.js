const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "title":String,
        "category":String,
        "publishedyear":String,
        "authorname":String,
        "description":String,
        "distributor":String,
        "publisher":String,
        "price":String
    }
)

let librarymodel=mongoose.model("addbooks",schema)
module.exports={librarymodel}