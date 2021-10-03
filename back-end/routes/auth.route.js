const express = require('express')
const router = express.Router()

// Import Controllers
const {
    login,
    register,
    forgotPass,
    resetPass
} = require('../controllers/auth.controller')

// Auth
router.route('/login').post(login)
router.route('/register').post(register)
router.route('/forgotpassword').post(forgotPass)
router.route('/resetpassword/:tokenResetPassword').put(resetPass)

module.exports = router