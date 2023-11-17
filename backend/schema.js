const mongoose = require('mongoose')
const {Schema} = mongoose

const LogSchema = new Schema({
    level: String,
	message: String,
    resourceId: String,
	timestamp: String,
	traceId: String,
    spanId: String,
    commit: String,
    metadata: {
        parentResourceId: String
    }
})


const LogModel = mongoose.model("log_data", LogSchema)

module.exports = LogModel