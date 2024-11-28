import { Router } from "express";
import { addFlight , getAllFlights , getFlightById , updateFlight, deleteFlight } from "../controller/flight.controller.js";

const flightRouter = Router();

flightRouter.post("/add",addFlight)
flightRouter.get("/",getAllFlights)
flightRouter.get("/:id",getFlightById)
flightRouter.put("/edit/:id",updateFlight)
flightRouter.delete("/delete/:id",deleteFlight)

export default flightRouter;