const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db",
});

conn.connect((err) => {
  if (err) {
    console.log("error connection: " + err.stack);
    return;
  }
  console.log("connected as id " + conn.threadId);
});

module.exports = conn;
