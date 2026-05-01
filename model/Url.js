const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    originalUrl:String,
    shortId:String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
})
module.exports = mongoose.model("Url",urlSchema)