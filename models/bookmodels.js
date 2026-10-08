import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Librarydb"
});

export const fetchAllBooks = async () => {
    const [rows] = await pool.query('SELECT * FROM books');
    return rows;
};

// insert
export const insert = async (book) => {
    const [result] = await pool.query(
        "INSERT INTO books(title, author) VALUES (?, ?)",
        [book.title, book.author]
    );

    return result.insertId;
};