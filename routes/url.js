const express = require('express')
const {setShort,getShort} = require('../controllers/urlController')
const router = express.Router()

router.post("/shortern",setShort)
router.get("/:shortId",getShort)

module.exports = router