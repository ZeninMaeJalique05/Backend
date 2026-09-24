import * as bookModel from "../models/bookmodels.js";

export const fetchAllBooks = async () => {
    const books = await bookModel.getAllBooks();

    return books;
};