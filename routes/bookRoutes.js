import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookRouter = express.Router();

bookRouter.get('/all', bookController.fetchAllBooks);
bookRouter.post('/', bookController.createBooks);

export default bookRouter;



