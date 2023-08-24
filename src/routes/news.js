const express = require('express');
const router = express.Router()
const axios = require('axios');




router.get('', async (req, res) => {
    const key = '3b32d42f756f4edc9a9ca80b9ae3d793'
    const url = `https://newsapi.org/v2/everything?q=sports&apiKey=${key}`;

    try {
        const NewsUpdate = await axios.get(url);
        const data = NewsUpdate.data.articles;
        
        // newsArr.push(data)
        res.render('news', { News: data })

    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
            console.log(err.response.data)
            console.log(err.response.header)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.error("Error: " + err.message);
        }
    }

})
router.post('', async (req, res) => {
    const key = '3b32d42f756f4edc9a9ca80b9ae3d793'
    const inpTxt = req.body.inpTxt;
    const url = `https://newsapi.org/v2/everything?q=${inpTxt}&apiKey=${key}`;
    const newsArr = []

    try {
        const NewsUpdate = await axios.get(url);
        const data = NewsUpdate.data.articles;
        res.render('news', { News: data })

    } catch (err) {
        if (err.response) {
            console.log(err.response.status)
            console.log(err.response.data)
            console.log(err.response.header)
        } else if (err.request) {
            console.log(err.request)
        } else {
            console.error("Error: " + err.message);
        }
    }

})

module.exports = router;