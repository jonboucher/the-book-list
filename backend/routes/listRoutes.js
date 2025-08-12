import express from "express";
import { createList } from "../controllers/listController.js";

const router = express.Router();

router.post("/", createList);

export default router;
