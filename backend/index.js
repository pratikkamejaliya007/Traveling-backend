import express from 'express'
import db from './db.js'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// router
import userRoute from './route/user.route.js'
import flightRouter from './route/flight.route.js'
import HotelRoute from './route/hotel.route.js'
import FlightBookingRouter from './route/flightbooking.route.js'
import HotelBookingRouter from './route/hotelbooking.route.js'


const port = 8000 
const app = express()

app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:3000",
    credentials : true
}))

app.use("/",userRoute)
app.use("/flight",flightRouter)
app.use("/hotel",HotelRoute)
app.use("/flightbook",FlightBookingRouter)
app.use("/hotelbook",HotelBookingRouter)

app.listen(port,()=> console.log(`server is port ${port} run`))