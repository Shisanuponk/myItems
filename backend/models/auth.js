const mongoose = require('mongoose')
const Schema = mongoose.Schema

let loginSchema = new Schema({
    email: String,
    password: String,
}, {
    collection: "userinfo"
})

module.exports = mongoose.model('LoginSchema', loginSchema)