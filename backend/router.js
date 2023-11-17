const express = require('express')
const router = express.Router();
const LogModel = require('./schema')

router.get('/', async (req, res) => {
    const data = await LogModel.find({})
    res.json(data)
})

router.post('/log', async (req, res) => {
    if (!req.body)
        res.json({ message: "No data in body" })
    try {
        const doc = new LogModel(req.body)
        await doc.save();
        res.json(doc)
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

module.exports = router