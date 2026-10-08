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

// insert
export const insert = async (student) => {
    const [result] = await pool.query(
        "INSERT INTO students(name, srcode, program) VALUES (?, ?, ?)",
        [student.name, student.srcode, student.program]
    );

    return result.insertId;
};