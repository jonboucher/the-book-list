import express from "express";
import { createList, addBookToList } from "../controllers/listController.js";

const router = express.Router();

router.post("/", createList);
router.post("/addBook/:listId", addBookToList);

export default router;
