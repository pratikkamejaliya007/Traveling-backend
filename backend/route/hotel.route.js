import { Router } from "express";
import { addHotel,getAllHotels,getHotelById,updateHotel,deleteHotel } from "../controller/hotel.controller.js";
import uploadpic from '../middleware/multer.js'

const HotelRoute = Router();

HotelRoute.post("/add",uploadpic,addHotel)
HotelRoute.get("/",getAllHotels)
HotelRoute.get("/:id",getHotelById)
HotelRoute.put("/edit/:id",updateHotel)
HotelRoute.delete("/delete/:id",deleteHotel)

export default HotelRoute;