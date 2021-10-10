const axios = require('axios')
const User = require('../models/User.model')
const ErrorResponse = require('../utils/errorResponse')

// const facebook2 = async (req, res, next) => {
//     console.log('res --> ', req.body.user);
//     if(!req.body.user)
//         return next(new ErrorResponse("Please provide user data", 400))
//     try{
//         const response = await axios.get(
//             `https://graph.facebook.com/v12.0/oauth/access_token?`+
//             `grant_type=fb_exchange_token&`+
//             `client_id=${process.env.FACEBOOK_CLIENT_ID}&`+
//             `client_secret=${process.env.FACEBOOK_CLIENT_SECRET}&`+
//             `fb_exchange_token=${req.body.user.accessToken}`
//         )
//         const result = response.data
//         console.log('result --> ', result);
//     } catch (err) {
//         next(err)
//     }
// }

const facebook = async (req, res, next) => {
    // console.log(req.body.user)
    if(!req.body.user) return next(new ErrorResponse("Please provide user data", 400))
    try{
        const user = await User.findOne({facebookId: req.body.user.userId})
        if(!user){
            try {
                const userRegis = await User.create({
                    facebookId: req.body.user.userId,
                    name: req.body.user.name
                })
                sendToken(userRegis, 200, res)
            } catch (err) {
                next(err)
            }
        }
        sendToken(user, 200, res)
    } catch (err) {
        next(err)
    }
}

const google = async (req, res, next) => {
    // console.log(req.body.user)
    if(!req.body.user) return next(new ErrorResponse("Please provide user data", 400))
    try{
        const user = await User.findOne({googleId: req.body.user.userId})
        if(!user){
            try {
                const userRegis = await User.create({
                    googleId: req.body.user.userId,
                    name: req.body.user.name
                })
                sendToken(userRegis, 200, res)
            } catch (err) {
                next(err)
            }
        }
        sendToken(user, 200, res)
    } catch (err) {
        next(err)
    }
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken()
    res.status(statusCode).json({ success: true, token })
}

module.exports = {facebook, google}