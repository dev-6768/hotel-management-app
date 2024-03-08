const express = require('express')
const router = express.Router()
const createBooking = require('../controllers/booking_controller')

router.route('/create/booking').post(createBooking)

module.exports = router