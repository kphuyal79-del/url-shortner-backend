const Url = require('../model/Url')
const {nanoid} = require('nanoid')
const forward = process.env.BASE_URL
const setShort = async(req,res)=>{
    try {
            const {originalUrl} = req.body

    const shortId = nanoid(6)

    const newUrl = new Url({
        originalUrl,
        shortId,
        user:req.user.id
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
        await url.save()
        res.redirect(url.originalUrl)
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}
const getMyUrls = async(req,res)=>{
    try {
        const urls = await Url.find({user:req.user.id})
        res.json(urls)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
module.exports = {setShort,getShort,getMyUrls}