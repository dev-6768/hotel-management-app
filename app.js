require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const connectToDb = require('./db/connection')
const { welcomePage } = require('./controllers/home_controller')
const welcomeRouter = require('./routers/welcome_route')
const createBookingRouter = require('./routers/booking_route')

app.use(express.json());

app.use('/', welcomeRouter);
app.use('/api/v1', createBookingRouter)

const start = async() => {
    try {
        await connectToDb(process.env.CONNECTION_URL);
        console.log(new Date());
        app.listen(port, (err)=>{console.log("app is listening to port " + String(port))})
    }

    catch(error) {
        console.log(error)
    }
}

start()

