import express from "express";
import auth from "../middleware/auth.js";
import {
  getRentals,
  createRental,
  bookRental,
  updateRental,
  deleteRental,
  getRentalsBySearch,
  makePayment,
} from "../controllers/rentals.js";
const router = express.Router();
router.route("/").get(getRentals).post(auth, createRental);
router.route("/search").get(getRentalsBySearch);

router
  .route("/:id")
  .get(bookRental)
  .patch(updateRental)
  .delete(deleteRental)
  .post(auth, makePayment);

export default router;
