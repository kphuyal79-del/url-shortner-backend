const express = require('express')
const app = express()
const cors = require('cors')
const {DBconnect} = require('./config/db')
require('dotenv').config()
app.use(cors())
app.use(express.json())
DBconnect
const PORT = process.env.PORT
const urlRoutes = require('./routes/url')
app.use('/',urlRoutes)
app.listen(PORT,()=>{
    console.log(`Server Running on port: ${PORT}`)
})