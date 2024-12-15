import express from "express";
import { userRouter } from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json())

app.use("/api/v1/auth", userRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});