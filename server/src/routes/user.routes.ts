import express from "express";
import { changePassword} from "../controllers/user.controller";
import { middleware } from "../lib/middleware";

const router = express.Router();

router.put("/change-password",middleware, changePassword);

export { router as userRoutes };