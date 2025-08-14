import express from "express";
import { createBook, getBook } from "../controllers/listController.js";

const router = express.Router();

router.post("/", createBook);
router.get("/:id", getBook);

export default router;
