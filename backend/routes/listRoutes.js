import express from 'express';
import { getLists, createList, addBookToList } from '../controllers/listController.js';

const router = express.Router();

router.get('/user/:id', getLists);
router.post('/', createList);
router.post('/addBook/:listId', addBookToList);

export default router;
