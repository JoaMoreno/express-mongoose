const { Schema, model } = require("mongoose");

const mtgaSchema = new Schema({
    name: String,
    user: String
},{
    versionKey: false
})
module.exports = model("Mtga", mtgaSchema);