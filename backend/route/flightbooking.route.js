import { Router } from "express";
import { Add_flightbooking , get_fligthbook , get_flightByID ,update_flightbooking,delete_flightbookimg , user_booked} from "../controller/flightbooking.contoller.js";

const FlightBookingRouter = Router()

FlightBookingRouter.post("/book/:id",Add_flightbooking)
FlightBookingRouter.get("/",get_fligthbook)
FlightBookingRouter.get("/:id",get_flightByID)
FlightBookingRouter.put("/update/:id",update_flightbooking)
FlightBookingRouter.delete("/delete/:id",delete_flightbookimg)
FlightBookingRouter.get("/booked/:id",user_booked)

export default FlightBookingRouter