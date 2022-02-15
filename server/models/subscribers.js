import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subscribeSchema = new Schema({
  email: String,
});

export default mongoose.model("Subscriber", subscribeSchema);
