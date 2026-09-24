import * as bookService from "../services/booksevices.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.fetchAllBooks();

        res.status(200).json(books);
    } catch (error) {
        console.error("DATABASE ERROR:", error);

        res.status(500).json({
            message: "Failed to fetch books",
            error: error.message
        });
    }
};