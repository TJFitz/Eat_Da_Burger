const conn = require("./connection");

const orm = {
  selectAll: function (table, cb) {
    let queryString = "SELECT * FROM ??";
    conn.query(queryString, [table], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function (table, name, boolean, cb) {
    let queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
    conn.query(queryString, [table, name, boolean], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: function (table, devoured, id, cb) {
    let queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
    conn.query(queryString, [table, devoured, id], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  deleteOne: function (table, id, cb) {
    let queryString = "DELETE FROM ?? WHERE id = ?";
    conn.query(queryString, [table, id], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
