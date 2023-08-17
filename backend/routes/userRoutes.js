import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import express from "express";
const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").put(updateUserProfile).get(getUserProfile);

export default router;
