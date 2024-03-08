const BookingSchema = require('../schemas/booking_schema')

const getAllBookings = async(req, res, roomType, roomNumber) => {
    try {
        const fetchAllBookings = await BookingSchema.find({"roomNumber":roomNumber, "roomType":roomType})
        return {fetchAllBookings}
    }

    catch(err) {
        console.log(err);
    }
}

const createBooking = async(req, res) => {
    try {
        bookingDetails = req.body

        bookingDetailsStartTime = new Date(bookingDetails.startTime).getTime()
        bookingDetailsEndTime = new Date(bookingDetails.endTime).getTime()

        var bookingDetailsRoomNumber = bookingDetails.roomNumber
        var bookingDetailsRoomType = bookingDetails.roomType

        const getAllBookingsJson = await getAllBookings(req, res, bookingDetailsRoomType, bookingDetailsRoomNumber)
        flag = true
        for(var i = 0; i < getAllBookingsJson.fetchAllBookings.length; i++) 
        {
            var preStartTime = new Date(getAllBookingsJson.fetchAllBookings[i].startTime).getTime()
            var preEndTime = new Date(getAllBookingsJson.fetchAllBookings[i].endTime).getTime()
            
            if(((preStartTime <= bookingDetailsStartTime) && (bookingDetailsStartTime <= preEndTime)) || ((preStartTime <= bookingDetailsEndTime) && (bookingDetailsEndTime <= preEndTime))) 
            
            {
                flag = false
                break
            }

        }

        if(flag) {
            const booking = await BookingSchema.create(req.body)
            res.status(200).json( {booking} )
            console.log(booking)
        }

        else {
            res.status(400).send("Invalid booking credentials. Room " + bookingDetailsRoomType + bookingDetailsRoomNumber + " already booked between this time period.")
        }
    }

    catch(err) {
        console.log(err)
    }
}

module.exports = createBooking