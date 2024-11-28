import HotelBooking from "../model/bookinghotel.js";

export const Add_booking = async(req,res)=>{
    try{
        const { roomType , numberOfRooms , checkInDate , checkOutDate} = req.body;
        const {id} = req.params
        await HotelBooking.create({user:req.user.id,hotel:id,roomType,numberOfRooms,checkInDate,checkOutDate})

        return res.status(201).json({message:"Hotel Room Booked"})

    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const get_hotelbooking = async(req,res)=>{
    try{
        let data = await HotelBooking.find()
        return res.status(200).json(data)
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const get_hotelbookingById = async(req,res)=>{
    try{
        const {id} = req.params
        let data = await HotelBooking.findById(id)
        return res.status(200).json(data)
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const update_booking = async(req,res)=>{
    try{
        await HotelBooking.findByIdAndUpdate(req.params.id,req.body)
        return res.status(201).json({message:"Hotel Booking Updated"})
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const delete_booking = async(req,res)=>{
    try{
        await HotelBooking.findByIdAndDelete(req.params.id)
        return res.status(201).json({message:"Booking Deleted"})
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

export const user_booked = async(req,res)=>{
    try{
        let data = await HotelBooking.find({user:req.user.id})
        return res.status(200).json(data)
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}