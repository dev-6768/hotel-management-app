const express = require('express')
const router = express.Router()
const {viewAllBooking, viewSelectedBooking} = require('../controllers/view_controller')

router.route("/view/all").get(viewAllBooking)
router.route("/view/selected").get(viewSelectedBooking)

module.exports = router


