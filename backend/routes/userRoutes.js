import express from 'express';
import { loginUser, getUser, createUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
