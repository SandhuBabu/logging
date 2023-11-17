const mongoose = require("mongoose")

const connectionUri = "mongodb://127.0.0.1:27017/logging";

// mongoose.connect(connectionUri)


const connectDB = async () => {
    try {
        await mongoose.connect(connectionUri)
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
}

module.exports = connectDB