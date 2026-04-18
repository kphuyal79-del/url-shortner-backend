const mongoose = require('mongoose')
require('dotenv').config()
const URI = process.env.MONGO_URI
const DBconnect = mongoose.connect(URI)
.then(()=>{
    console.log('Database Connect')
})
.catch((err)=>{
    console.log(err)
})

module.exports = {DBconnect}