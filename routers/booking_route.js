const express = require('express')
const router = express.Router()
const createBooking = require('../controllers/booking_controller')

router.route('/createbooking').post(createBooking)

module.exports = router