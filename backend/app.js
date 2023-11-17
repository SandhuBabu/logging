const express = require('express')
const router = require('./router')

const connectDB = require('./utils/db')

const app = express()
app.use(express.json());
app.use('/', router)


connectDB().then(() => {
    app.listen(3000, async () => {
        console.log("server started running on port 3000");
    })
})


