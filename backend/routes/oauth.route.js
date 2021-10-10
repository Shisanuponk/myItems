const express = require('express')
const router = express.Router()

const {facebook, google} = require('../controllers/oauth.controller')

router.route('/facebook').post(facebook)
router.route('/google').post(google)
router.route('/twitter').post()
router.route('/line').post()

module.exports = router