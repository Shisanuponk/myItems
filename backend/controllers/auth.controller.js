const crypto = require('crypto')
const ErrorResponse = require('../utils/errorResponse')
const User = require('../models/User.model')
const sendEmail = require('../utils/sendEmail')

const login = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password)
        return next(new ErrorResponse('Please provide an email and password', 400))

    try {
        const user = await User.findOne({ email }).select('+password')

        if (!user)
            return next(new ErrorResponse('Invalid credentials', 401))
        const isMatch = await user.matchPassword(password)
        if (!isMatch)
            return next(new ErrorResponse('Invalid credentials', 401))

        sendToken(user, 200, res)
    } catch (err) {
        next(err)
    }
}

const register = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            password,
            status: "verify email",
        });

        sendToken(user, 200, res);
    } catch (err) {
        next(err)
    }
}


const forgotPass = async (req, res, next) => {
    const { email } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user)
            return next(new ErrorResponse('No email could not be send', 404))

        const tokenReset = user.getResetPassToken()

        await user.save()

        const resetUrl = `${process.env.CLIENT_URL}/passwordreset/${tokenReset}`

        const message = `
        <h1>You have requested a password reset</h1>
        <p>Please make a put request to the following link:</p>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `

        try {
            await sendEmail({
                to: user.email,
                subject: "Reset Password",
                text: message,
            })
            res.status(200).json({ success: true, data: 'Email Sent' })
        } catch (err) {
            console.log(err)

            user.token_reset_password = undefined
            user.token_reset_password_exp = undefined

            await user.save()

            return next(new ErrorResponse('Email could not be sent', 500))
        }
    } catch (err) {
        next(err)
    }
}

const resetPass = async (req, res, next) => {
    const token_reset_password = crypto
        .createHash('sha256')
        .update(req.params.tokenResetPassword)
        .digest('hex')

    try {
        const user = await User.findOne({
            token_reset_password,
            token_reset_password_exp: { $gt: Date.now() }
        })

        if (!user)
            return next(new Error('Invalid Token', 404))

        user.password = req.body.password
        user.token_reset_password = undefined
        user.token_reset_password_exp = undefined

        await user.save()
        res.status(201).json({
            success: true,
            data: "Password Update success",
            token: user.getSignedJwtToken(),
        })
    } catch (err) {
        next(err)
    }
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken()
    res.status(statusCode).json({ success: true, token })
}

module.exports = { login, register, forgotPass, resetPass }