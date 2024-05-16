import express from 'express';
import {getBook} from '../controller/newBook.Controller.js';


const router = express.Router();

router.get('/', getBook);

export default router;