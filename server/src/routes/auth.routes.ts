import express from "express";
import { createUser, loginUser } from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

export { router as authRoutes };