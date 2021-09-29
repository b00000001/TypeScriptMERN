import mysql2 from 'mysql2/promise'
import path from 'path'
import * as dotenv from 'dotenv'
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const { DB_USER, DB_PASS, DB_NAME } = process.env

const createDatabase = async () => {
  const connection = await mysql2.createConnection({
    user: DB_USER,
    password: DB_PASS
  })
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`)
  // eslint-disable-next-line no-console
  console.log('Database created or successfully checked')
  process.exit(0)
}

createDatabase()
