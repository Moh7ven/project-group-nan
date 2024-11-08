import express from "express";
import { getUserConnected } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/getUser", getUserConnected);

export default router;
