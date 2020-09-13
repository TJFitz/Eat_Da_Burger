const mysql = require("mysql");
let conn;
if (process.env.JAWSDB_URL) {
  conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db",
  });
}

conn.connect((err) => {
  if (err) {
    console.log("error connection: " + err.stack);
    return;
  }
  console.log("connected as id " + conn.threadId);
});

module.exports = conn;
