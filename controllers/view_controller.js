const BookingSchema = require('../schemas/booking_schema')

const viewAllBooking = async(req, res) => {
    const viewAllBookings = await BookingSchema.find({})
    console.log(viewAllBookings)
    res.status(200).json({viewAllBookings})
}

const viewSelectedBooking = async(req, res) => {
    const {roomNumber, roomType, startTime, endTime, id} = req.query
    if(id != null) {
        if(startTime != null && endTime != null) {
            try {
                const viewSelectedBookings = await BookingSchema.find({
                    "roomNumber": roomNumber || {"$in": [1,2,3,4,5]}, 
                    "roomType": roomType || {"$in": ["A", "B", "C"]}, 
                    "startTime":{"$gte":startTime || Date('1970-01-01'), "$lte":endTime || Date('9999-12-12')},
                    "endTime":{"$gte":startTime || Date('1970-01-01'), "$lte": endTime || Date('9999-12-12')},    
                    "_id": ObjectId(id)
                })
                res.status(200).send(viewSelectedBookings)
                return
            }
    
            catch(err) {
                res.status(400).send("Some Error Encountered Please try again later")
                return
            }
        }

        else {
            try {
                const viewSelectedBookings = await BookingSchema.find({
                    "roomNumber": roomNumber || {"$in": [1,2,3,4,5]}, 
                    "roomType": roomType || {"$in": ["A", "B", "C"]},  
                    "_id": ObjectId(id)
                })
                res.status(200).send(viewSelectedBookings)
                return
            }
    
            catch(err) {
                res.status(400).send("Some Error Encountered Please try again later")
                return
            }
        }
        
    }

    else {
        if(startTime != null && endTime != null) {
            try {
                const viewSelectedBookings = await BookingSchema.find({
                    "roomNumber": roomNumber || {"$in": [1,2,3,4,5]}, 
                    "roomType": roomType || {"$in": ["A", "B", "C"]}, 
                    "startTime":{"$gte":startTime, "$lte":endTime},
                    "endTime":{"$gte":startTime, "$lte": endTime},  
                })
                res.status(200).send(viewSelectedBookings)
                return
            }
    
            catch(err) {
                res.status(400).send("Some Error Encountered Please try again later")
                return
            }
        }

        else {
            try {
                const viewSelectedBookings = await BookingSchema.find({
                    "roomNumber": roomNumber || {"$in": [1,2,3,4,5]}, 
                    "roomType": roomType || {"$in": ["A", "B", "C"]},  
                })
                res.status(200).send(viewSelectedBookings)
                return
            }
    
            catch(err) {
                res.status(400).send("Some Error Encountered Please try again later")
                return
            }
        }
    }
    
}

module.exports = {viewAllBooking, viewSelectedBooking}