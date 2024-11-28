import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    flight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight", // Reference to the Flight model
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    seats: {
      type: Number,
      required: true,
      min: [1, "At least one seat must be booked"],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    }
  },
  {
    timestamps: true,
  }
);

const FlightBooking = mongoose.model("FlightBooking", bookingSchema);

export default FlightBooking;
