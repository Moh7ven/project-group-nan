import express from "express";
import { createUser, signIn } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signUp", createUser);

router.post("/signIn", signIn);

export default router;
