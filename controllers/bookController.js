import * as bookService from '../services/booksevices.js';

export const fetchAllBooks = async (req, res) => {
    const books = await bookService.fetchAllBooks();
    response.status(200).json(books);
}