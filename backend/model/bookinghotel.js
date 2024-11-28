import mongoose from "mongoose";

const hotelBookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel", // Reference to the Hotel model
      required: true,
    },
    roomType: {
      type: String, // E.g., 'Deluxe', 'Suite', etc.
      required: true,
    },
    numberOfRooms: {
      type: Number,
      required: true,
      min: [1, "At least one room must be booked"],
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
      required: true,      
    }    
  },
  {
    timestamps: true
  }
);

const HotelBooking = mongoose.model("HotelBooking", hotelBookingSchema);

export default HotelBooking;
