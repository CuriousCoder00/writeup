import express from "express";
import { createUser, loginUser, logoutUser } from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export { router as authRoutes };