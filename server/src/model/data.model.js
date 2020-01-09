const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    author: String,
    comments: [{
        tittle: String,
        body: String,
        created_ad: { type: Date, default: Date.now }
    }],
    date: { type: Date, default: Date.now }
},{
    versionKey: false
})

module.exports = model("Blog", blogSchema)