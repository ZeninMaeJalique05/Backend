import * as bookServices from '../services/booksevices.js';

export const fetchAllBooks = async (requestAnimationFrame, res) => {
    const books = await bookServices.fetchAllBooks();
    res.status(200).json(books);
}