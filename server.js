const express = require('express')
const app = express()
const cors = require('cors')
const {DBconnect} = require('./config/db')
require('dotenv').config()
app.use(cors())
app.use(express.json())
DBconnect
const PORT = process.env.PORT || 5000
const urlRoutes = require('./routes/url')
const userRoutes = require('./routes/user')
app.use('/',urlRoutes)
app.use('/api/users', userRoutes)
app.listen(PORT,()=>{
    console.log(`Server Running on port: ${PORT}`)
})