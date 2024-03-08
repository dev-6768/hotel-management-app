require('dotenv').config()
const express = require('express')
const app = express()
const connectToDb = require('./db/connection')
const { welcomePage } = require('./controllers/home_controller')
const welcomeRouter = require('./routers/welcome_route')
const createBookingRouter = require('./routers/booking_route')
const viewBookingRouter = require('./routers/view_route')

app.use(express.json());

app.use('/', welcomeRouter);
app.use('/api/v1', createBookingRouter)
app.use('/api/v1', viewBookingRouter)

const start = async() => {
    try {
        await connectToDb(process.env.CONNECTION_URL);
        console.log(new Date());
        app.listen(process.env.PORT, (err)=>{console.log("app is listening to port " + String(process.env.PORT))})
    }

    catch(error) {
        console.log(error)
    }
}

start()

