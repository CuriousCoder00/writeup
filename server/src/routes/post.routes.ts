import express from "express";
import { getAllPosts, createPost, deletePostById, getAllUserPosts, getPostById, updatePostById } from "../controllers/post.controller";
import { middleware } from "../lib/middleware";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/create", middleware, createPost);
router.get("/all", middleware, getAllUserPosts);
router.get("/:id", middleware, getPostById);
router.put("/:id", middleware, updatePostById);
router.delete("/:id", middleware, deletePostById);

export { router as postRoutes };