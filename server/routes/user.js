import express from "express";
import auth from "../middleware/auth.js";
import {
  signin,
  signup,
  getUserBookings,
  updateAccount,
  subscribe,
} from "../controllers/user.js";
const router = express.Router();
router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/updateAccount/:id", updateAccount);
router.get("/getBookings", auth, getUserBookings);
router.post("/subscribe", subscribe);
export default router;
