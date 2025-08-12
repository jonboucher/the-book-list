import express from "express";
import { createBook } from "../controllers/listController.js";

const router = express.Router();

router.post("/", createBook);

export default router;
