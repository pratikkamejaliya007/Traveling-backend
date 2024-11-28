import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  contact: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  img :{
    type : String,
    required:true
  },
  amenities: {
    type: [String],
    default: [],
  },
  roomTypes: [
    {
      type: { type: String, required: true }, // Room type (e.g., 'Deluxe', 'Suite')
      price: { type: Number, required: true }, // Price per night
      availableRooms: { type: Number, required: true }, // Number of available rooms
    },
  ],
  rating: {
    type : Number, required : true
  },
  status: {
    type: String,
    enum: ['Open', 'Closed'],
    default: 'Open',
  },
}, { timestamps: true});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel