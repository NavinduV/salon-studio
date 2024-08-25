import express from "express";
import {
  register,
  login,
  addNewAdmin,
  addNewArtist,
  getAllArtists,
  getUserDetails,
  logoutAdmin,
  logout,
} from '../controller/userController.js';
import {
  isAdminAuthenticated,
  isUserAuthenticated,
} from "../middleware/auth.js";

const router = express.Router();

router.post("/user/register", register);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.post("/artist/addnew", isAdminAuthenticated, addNewArtist);
router.get("/artists", getAllArtists);
router.get("/user/me", isUserAuthenticated, getUserDetails);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/user/logout", isUserAuthenticated, logout);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

export default router;
