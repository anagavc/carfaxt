import mongoose from "mongoose";
const Schema = mongoose.Schema;
import User from "./user.js";
import Rental from "./postRental.js";
const PaymentSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  expiration: { type: String, required: true },
  customer: {
    type: String,
  },
  car: {
    type: String,
  },
});

export default mongoose.model("Payment", PaymentSchema);
