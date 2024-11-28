import Hotel from "../model/hotel.model.js";

// Create a new hotel
export const addHotel = async (req, res) => {
  try {
    
    const img =  req.file.path.replace(/\\/g,"/")

    req.body.img = img

    const newHotel = await Hotel.create(req.body);

    res.status(201).json({
      message: "Hotel created successfully",
      data: newHotel,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Get all hotels
export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single hotel by ID
export const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a hotel
export const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Ensures the updated document is returned and validation is applied
    );
    if (!updatedHotel) return res.status(404).json({ message: "Hotel not found" });
    res.status(200).json({ message: "Hotel updated successfully", data: updatedHotel });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a hotel
export const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!deletedHotel) return res.status(404).json({ message: "Hotel not found" });
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
