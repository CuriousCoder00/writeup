import express from "express";
import { createPost, getPostById } from "../controllers/post.controller";
import { middleware } from "../lib/middleware";

const router = express.Router();

router.post("/create", middleware, createPost);
router.get("/:id", middleware, getPostById);

export { router as postRoutes };