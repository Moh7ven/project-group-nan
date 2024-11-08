import express from "express";
import { createUser, signIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signUp", createUser);

router.post("/signIn", signIn);

export default router;
