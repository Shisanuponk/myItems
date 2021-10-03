const express = require('express')
const router = express.Router()
const { getPrivateRoute } = require('../controllers/private.controller')
const { protect } = require('../middleware/auth.middleware')

router.route('/').get(protect, getPrivateRoute)

module.exports = router