import mongoose from "mongoose";
import Rental from "../models/postRental.js";
import Payment from "../models/payments.js";
export const getRentals = async (req, res) => {
  try {
    const rentals = await Rental.find();

    res.status(200).json({
      data: rentals,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRental = async (req, res) => {
  const rental = req.body;
  const newRental = new Rental({ ...rental });
  try {
    await newRental.save();
    res.status(201).json(newRental);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const bookRental = async (req, res) => {
  const { id } = req.params;

  try {
    const rental = await Rental.findById(id);
    res.status(200).json(rental);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateRental = async (req, res) => {
  const { id } = req.params;
  const rental = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No rental with the id:${id}`);

  const updatedRental = await Rental.findByIdAndUpdate(
    id,
    { ...rental, id },
    { new: true }
  );
  res.json(updatedRental);
};

export const deleteRental = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No rental with such id");
  await Rental.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

export const getRentalsBySearch = async (req, res) => {
  const { searchQuery, location } = req.query;
  try {
    const carName = new RegExp(searchQuery, "i");
    const rentals = await Rental.find({
      $or: [{ carName }, { location: { $in: location } }],
    });

    res.json({ data: rentals });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const makePayment = async (req, res) => {
  const payment = req.body;

  const { id } = req.params;

  const newPayment = new Payment({
    ...payment,
    car: id,
    customer: req.userId,
  });
  try {
    await newPayment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
