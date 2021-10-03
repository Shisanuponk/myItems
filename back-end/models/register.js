const mongoose = require('mongoose')
const Schema = mongoose.Schema

let registerSchema = new Schema({
    name: String,
    email: String,
    password: String,
    repassword: String,
}, {
    collection: "userinfo"
})

module.exports = mongoose.model('RegisterSchema', registerSchema)