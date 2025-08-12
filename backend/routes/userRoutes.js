import express from "express";
import { createUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.delete("/:id", deleteUser);

export default router;
