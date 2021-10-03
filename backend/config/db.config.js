const mongoose = require('mongoose')

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}`, options)
    console.log(`MongoDB Connected`);
}

module.exports = connectDB