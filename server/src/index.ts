import express from "express";
import { authRoutes, postRoutes, userRoutes } from "./routes";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/post", postRoutes)
app.use("/api/v1/user", userRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});