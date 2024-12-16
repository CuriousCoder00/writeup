import { Request, Response } from "express";
import { createPost as cp } from "../validations/post.validation";
import { prisma as db } from "../lib/prisma";

export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, content } = cp.parse(req.body);
        if (req.user === undefined) {
            res.status(401).json({ message: "Unauthorized: No user ID" });
            return
        }
        const authorId = req.user.id;
        if (!authorId) {
            res.status(401).json({ message: "Unauthorized: No user ID" });
            return
        }
        // Create post in the database
        const data = await db.post.create({
            data: {
                title,
                content,
                authorId
            }
        })
        res.status(201).json({ message: "Post created successfully", data });
        return
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return
    }
}

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const authorId = req.user?.id;
        const data = await db.post.findMany(
            {
                where: {
                    authorId
                }
            }
        );
        res.status(200).json({ message: "All posts", data });
        return
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return
    }
}

export const getPostById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).json({ message: "Post ID is required" });
            return
        }
        const data = await db.post.findUnique({
            where: {
                id
            }
        });
        if (!data) {
            res.status(404).json({ message: "Post not found" });
            return
        }
        res.status(200).json({ message: "Post found", data });
        return
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return
    }
}

export const deletePostById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).json({ message: "Post ID is required" });
            return
        }
        if (req.user === undefined) {
            res.status(401).json({ message: "Unauthorized: No user ID" });
            return
        }
        const authorId = req.user.id;
        if (!authorId) {
            res.status(401).json({ message: "Unauthorized: No user ID" });
            return
        }
        const post = await db.post.findUnique({
            where: {
                id
            }
        });
        if (!post) {
            res.status(404).json({ message: "Post not found" });
            return
        }
        if (post.authorId !== authorId) {
            res.status(401).json({ message: "Unauthorized: Not the author of the post" });
            return
        }
        await db.post.delete({
            where: {
                id
            }
        });
        res.status(200).json({ message: "Post deleted successfully" });
        return
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return
    }
}

export const updatePostById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).json({ message: "Post ID is required" });
            return
        }
        if (req.user === undefined) {
            res.status(401).json({ message: "Unauthorized: No user ID" });
            return
        }
        const authorId = req.user.id;
        if (!authorId) {
            res.status(401).json({ message: "Unauthorized: No user ID" });
            return
        }
        const post = await db.post.findUnique({
            where: {
                id
            }
        });
        if (!post) {
            res.status(404).json({ message: "Post not found" });
            return
        }
        if (post.authorId !== authorId) {
            res.status(401).json({ message: "Unauthorized: Not the author of the post" });
            return
        }
        const { title, content } = cp.parse(req.body);
        const data = await db.post.update({
            where: {
                id
            },
            data: {
                title,
                content
            }
        });
        res.status(200).json({ message: "Post updated successfully", data });
        return
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return
    }
}