// Imports
import asyncHandler from "express-async-handler";

/*
    1) POST     - /api/users - Register a user
    2) POST     - /api/users/auth - Authenticate a user and get token
    3) POST     - /api/users/logout - Logout user and clear cookie
    4) GET      - /api/users/profile - Get user profile
    5) PUT      - /api/users/profile - Update profile
*/

//  @desc   Auth user/set token
//  @route  POST /api/users/auth
//  @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//  @desc   Register new user
//  @route  POST /api/users
//  @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

//  @desc   Logout user
//  @route  POST /api/users/logout
//  @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

//  @desc   Get user profile
//  @route  GET /api/users/profile
//  @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

//  @desc   Update user profile
//  @route  PUT /api/users/profile
//  @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
