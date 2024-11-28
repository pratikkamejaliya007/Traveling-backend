import { Router } from "express";
import { Add_booking , get_hotelbooking , get_hotelbookingById ,update_booking,delete_booking , user_booked } from "../controller/hotelbookig.controller.js";

const HotelBookingRouter = Router()

HotelBookingRouter.post("/book",Add_booking)
HotelBookingRouter.get("/",get_hotelbooking)
HotelBookingRouter.get("/:id",get_hotelbookingById)
HotelBookingRouter.put("/edit/:id",update_booking)
HotelBookingRouter.delete("/delete/:id",delete_booking)
HotelBookingRouter.get("/booked/:id",user_booked)

export default HotelBookingRouter 