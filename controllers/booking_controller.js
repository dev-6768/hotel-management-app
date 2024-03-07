const BookingSchema = require('../schemas/booking_schema')

const getAllBookings = async(req, res) => {
    try {
        const fetchAllBookings = await BookingSchema.find({})
        return {fetchAllBookings}
    }

    catch(err) {
        console.log(err);
    }
}

const createBooking = async(req, res) => {
    try {
        console.log(req.body)
        bookingDetails = req.body
        bookingDetailsStartTime = bookingDetails.startTime;
        bookingDetailsEndTime = bookingDetails.endTime;
        
        const getAllBookingsJson = await getAllBookings(req, res)
        console.log(getAllBookingsJson);

        const booking = await BookingSchema.create(req.body)
        res.status(200).json( {booking} )
        console.log(booking)
    }

    catch(err) {
        console.log(err)
    }
}

module.exports = createBooking