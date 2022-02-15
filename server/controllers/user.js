//this imports the bcrypt package fro hashing and comparing passwords
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Payment from "../models/payments.js";
import Rental from "../models/postRental.js";
import mongoose from "mongoose";
import Subscriber from "../models/subscribers.js";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

//the signin controller
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({
        message: "The user does not exist,please create an account to continue",
      });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      process.env.AUTH_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong", error: e.message });
    console.log(e.message);
  }
};

//the signin controller
export const signup = async (req, res) => {
  const { email, password, location, name, confirmPassword, image } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "A user with the email address already exists" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "The passwords do not match" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name,
      location,
      image,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.AUTH_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ result, token });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(e);
  }
};

export const getUserBookings = async (req, res) => {
  const user = req.userId;

  try {
    const payments = await Payment.find({ customer: user });
    const payment = payments.map((payment) => {
      return payment.car;
    });

    const rentals = await Rental.find({ _id: payment });
    res.status(200).json({
      data: rentals,
    });
  } catch (error) {
    console.log(error);
    res.status(409).json({ error });
  }
};

export const updateAccount = async (req, res) => {
  const { id } = req.params;
  const account = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`There is no account with the id:${id}`);
  const updatedAccount = await User.findByIdAndUpdate(
    id,
    {
      ...account,
      id,
    },
    { new: true }
  );
  res.json(updatedAccount);
};

export const subscribe = async (req, res) => {
  const subscriber = new Subscriber(req.body);
  try {
    await subscriber.save();
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
