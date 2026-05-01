const express = require('express')
const {setShort,getShort,getMyUrls} = require('../controllers/urlController')
const authMiddleware = require('../middleware/auth.middleware')
const router = express.Router()

router.post("/shortern",authMiddleware,setShort)
router.get("/my-urls",authMiddleware,getMyUrls)
router.get("/:shortId",getShort)


module.exports = router