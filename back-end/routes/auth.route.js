const express = require("express");
const router = express.Router();

// Import Controller
const {
    signup,
    accountAtivation,
    signin,
    facebooklogin,
    googlelogin,
    twitterlogin,
    linelogin,
    forgotPassword,
    resetPassword
} = require()

router.post('/signup', signup);
router.post('/account-activation', accountAtivation)
router.post('/signin', signin)

// Forgot/Reset Password Router
router.put('/forgot-password', forgotPassword)
router.put('/reset-password', resetPassword)

router.post('/googlelogin', googlelogin)
router.post('/facebooklogin', facebooklogin)
router.post('/twitterlogin', twitterlogin)
router.post('/linelogin', linelogin)