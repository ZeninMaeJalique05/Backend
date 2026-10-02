import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "Librarydb"
});

export const fetchAllStudents = async () => {
    const [rows] = await pool.query('SELECT * FROM students');
    return rows;
};