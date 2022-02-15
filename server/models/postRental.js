import mongoose from "mongoose";

const rentalSchema = mongoose.Schema({
  carName: String,
  carYear: String,
  cost: String,
  brand: String,
  image: String,
  description: String,
  passengers: String,
  location: String,
  fuelType: String,
});

const Rental = mongoose.model("Rental", rentalSchema);
export default Rental;
