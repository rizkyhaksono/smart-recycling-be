import mysql from "mysql2";
import { config } from "dotenv";

const connection = () => {
  config();
  const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = process.env;
  return mysql.createPool({
    // host: DB_HOST,
    // user: DB_USER,
    // password: DB_PASSWORD,
    // database: DB_NAME,
    // port: DB_PORT,
    host: "localhost",
    user: "root",
    password: "root",
    port: "3307:3306",
    database: "recycling",
  });
};

export default connection().promise();
