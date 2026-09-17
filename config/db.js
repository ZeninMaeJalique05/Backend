const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin123",
    database: "libradydb"
}),

