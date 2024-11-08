import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
import { checkUser } from "./middlewares/checkUser.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/users", checkUser, userRouter);

app.listen(4000, () => {
  console.log("server started on port: 4000");
});
