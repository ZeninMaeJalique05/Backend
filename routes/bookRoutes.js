import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookRouter = express.Router();

bookRouter.get('/all', bookController.fetchAllBooks);
bookRouter.post('/', bookController.createBooks);
bookRouter.put('/:id', bookController.editBook);

export default bookRouter;




