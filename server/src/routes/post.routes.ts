import express from "express";
import { createPost, deletePostById, getAllPosts, getPostById, updatePostById } from "../controllers/post.controller";
import { middleware } from "../lib/middleware";

const router = express.Router();

router.post("/create", middleware, createPost);
router.get("/all", middleware, getAllPosts);
router.get("/:id", middleware, getPostById);
router.put("/:id", middleware, updatePostById);
router.delete("/:id", middleware, deletePostById);

export { router as postRoutes };