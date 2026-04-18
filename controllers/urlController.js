const Url = require('../model/Url')
const {nanoid} = require('nanoid')
const forward = process.env.URL
const setShort = async(req,res)=>{
    try {
            const {originalUrl} = req.body

    const shortId = nanoid(6)

    const newUrl = new Url({
        originalUrl,
        shortId
    })
    await newUrl.save()
    res.json({
        shortUrl:`${forward}/${shortId}`
    })
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}
const getShort =async(req,res)=>{
    try {
        const {shortId} = req.params
        const url = await Url.findOne({shortId})
        if(!url) return res.status(400).send('Not Found')
            url.clicks++
        await url.save()
        res.redirect(url.originalUrl)
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

module.exports = {setShort,getShort}