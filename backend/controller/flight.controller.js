import Flight from "../model/flight.model.js";

// Create a new flight
export const addFlight = async (req, res) => {
  try {
    const { 
      flightNumber, 
      airline, 
      departure, 
      arrival, 
      ticketPrice, 
      status, 
      seatsAvailable 
    } = req.body;

    // Create a new flight document
    const newFlight = new Flight({
      flightNumber,
      airline,
      departure,
      arrival,
      ticketPrice,
      status,
      seatsAvailable,
    });

    // Save the flight to the database
    const savedFlight = await newFlight.save();
    res.status(201).json({ message: "Flight created successfully", data: savedFlight });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all flights
export const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single flight by ID
export const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "Flight not found" });
    res.status(200).json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a flight
export const updateFlight = async (req, res) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Ensures the updated document is returned and validation is applied
    );
    if (!updatedFlight) return res.status(404).json({ message: "Flight not found" });
    res.status(200).json({ message: "Flight updated successfully", data: updatedFlight });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a flight
export const deleteFlight = async (req, res) => {
  try {
    const deletedFlight = await Flight.findByIdAndDelete(req.params.id);
    if (!deletedFlight) return res.status(404).json({ message: "Flight not found" });
    res.status(200).json({ message: "Flight deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
