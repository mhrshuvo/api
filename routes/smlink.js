const express = require('express')
const router = express.Router()
const smLink = require('../models/SocialMediaLink')


router.get('/',async (req, res) => {
    const link = await smLink.find()
    res.send(link)
})
.post('/', async (req, res) => {

    if(await smLink.findOne({name: req.body.name}))
        return res.status(400)
        .send({message: 'Link already exists'})

    

    const Link = new smLink({
        name: req.body.name,
        link: req.body.link
    })

    try{
        const savedLink = await Link.save()
        res.status(201).send(savedLink)
    }
    catch(err){
        res.setHeader('Content-Type', 'text/plain')
        .status(400)
        .json({message : err.message})
    }
})

//delete


module.exports = router

