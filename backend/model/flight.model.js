import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  flightNumber: {
    type: String,
    required: true,
    unique: true,
  },
  airline: {
    type: String,
    required: true,
  },
  departure: {
    airport: { type: String, required: true },
    city: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
  },
  arrival: {
    airport: { type: String, required: true },
    city: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['On Time', 'Delayed', 'Cancelled'],
    default: 'On Time',
  },
  seatsAvailable: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true,
});

const Flight = mongoose.model('Flight', flightSchema);

export default Flight
