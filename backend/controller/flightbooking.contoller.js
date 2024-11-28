import FlightBooking from "../model/bookingflight.model.js";

export const Add_flightbooking = async(req,res)=>{
    try{
        const {seats,totalPrice} = req.body;
        const {id} = req.params
        await FlightBooking.create({flight:id,user:req.user.id,seats,totalPrice})
        return res.status(201).json({message:"Flight Booked"})
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const get_fligthbook = async(req,res)=>{
    try{
        let data = await FlightBooking.find()
        return res.status(200).json(data)
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const get_flightByID = async(req,res)=>{
    try{
        const {id} = req.params
        let data = await FlightBooking.findById(id)
        return res.status(200).json(data)
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const update_flightbooking = async(req,res)=>{
    try{
        const {id} = req.params
        await FlightBooking.findByIdAndUpdate(id,req.body)
        return res.status(201).json({message:"Flight Booking Updated"})
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const delete_flightbookimg = async(req,res)=>{
    try{
        const {id} = req.params
        await FlightBooking.findByIdAndDelete(id)
        return res.status(201).json({message:"Flight Booking Deleted"})
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const user_booked = async(req,res)=>{
    try{
        let data = await FlightBooking.find({user:req.user.id})
        return res.status(200).json(data)
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}
