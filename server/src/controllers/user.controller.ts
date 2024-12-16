import { Request, Response } from "express";
import { prisma as db } from "../lib/prisma";
import { passwordChange } from "../validations/user.validation";
import bcrypt from "bcryptjs";

export const changePassword = async (req: Request, res: Response) => {
    try {
        const { oldPassword, newPassword } = passwordChange.parse(req.body);
        if (req.user === undefined) {
            res.status(401).json({ message: "Unauthorized: No user ID" });
            return
        }
        const user = await db.user.findUnique({
            where: {
                id: req.user.id
            }
        });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return
        }
        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid password" });
            return
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await db.user.update({
            where: {
                id: req.user.id
            },
            data: {
                password: hashedPassword
            }
        });
        res.status(200).json({ message: "Password changed successfully" });
        return
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return
    }
}
