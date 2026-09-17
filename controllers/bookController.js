import * as bookModel from "../services/bookservice.js";

export const fetchAllBooks = async (req, res) => {
    const books = await bookModel.fetchAllBooks();
    res.status(200).json(books);
}