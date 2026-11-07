import pool from '../config/db.js';

//read
export const fetchAllBooks = async () => {
    const [rows] = await pool.query('SELECT * FROM books');
    return rows;
};

export const findBookByNameAndAuthor = async(book) => {
    const [rows] = await pool.query(
        "SELECT * FROM books WHERE title = ? AND author = ?",
        [book.title, book.author]
    );
    return rows;
};

export const findBookById = async(id) => {
    const [rows] = await pool.query(
        "SELECT * FROM books WHERE id = ?",
        [id]
    );
    return rows;
};

//insert
export const insert = async (book) => {
    const [result] = await pool.query(
        "INSERT INTO books(title, author) VALUES (?, ?)",
        [book.title, book.author]
    );

    return result.insertId;
};

//update
export const update = async (book) => {
    const [result] = await pool.query(
        "UPDATE books SET title = ?, author = ? WHERE id = ?",
        [book.title, book.author, book.id]
    );
    return result.affectedRows;
};

//delete
export const deleteBook = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM books WHERE id = ?", [id]
    );
    return result.affectedRows;
};
