const mysql = require('mysql2/promise');
require("dotenv").config();

const { DB_USER, DB_PASS, DB_NAME } = process.env;

const createDatabase = async () => {
    const connection = await mysql.createConnection({
        user: DB_USER,
        password: DB_PASS,
    });
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`)
    console.log('Database created or successfully checked');
    process.exit(0);    
}
createDatabase();