import { Request, Response } from "express";
import { post } from "../validations/post.validation";
import { prisma as db } from "../lib/prisma";

export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, content, authorID } = post.parse(req.body);
        // const authorId = req.user?.id ;
        // if (!authorId) {
        //     res.status(401).json({ message: "Unauthorized: No user ID" });
        //     return
        // }
        // Create post in the database
        const data = await db.post.create({
            data: {
                title,
                content,
                authorId: authorID
            }
        })
        res.status(201).json({ message: "Post created successfully", data });
        return
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return
    }
}

export const getPostById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
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