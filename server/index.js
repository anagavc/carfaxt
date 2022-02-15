//due to the neweset version of node, we can use import instead of having to require each pack and save as a variable,we only have to save the type as amodule in the package.json
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import rentalRoutes from "./routes/rental.js";
import userRoutes from "./routes/user.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the carfaxt application");
});
app.use("/rentals", rentalRoutes);
app.use("/user", userRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

//connecting to the database
