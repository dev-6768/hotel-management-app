const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema(
    {
        userEmail: { 
            type: String, 
            required: true 
        },
        roomNumber: {
             type: Number, 
             required: true 
        },
        roomType: { 
            type: String, 
            enum: ['A', 'B', 'C'], 
            required: true 
        },
        startTime: { 
            type: Date, 
            required: true 
        },
        endTime: { 
            type: Date, 
            required: true 
        },
        price: { 
            type: Number, 
            required: true 
        }
    },
    {timestamps: true}
    
)

module.exports = mongoose.model("BookingSchema", BookingSchema)