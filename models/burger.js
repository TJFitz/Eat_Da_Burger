const orm = require("../config/orm");

const burger = {
  all: function (cb) {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  create: function (name, boolean, cb) {
    orm.insertOne("burgers", name, boolean, (res) => {
      cb(res);
    });
  },
  update: function (devoured, id, cb) {
    orm.updateOne("burgers", devoured, id, (res) => {
      cb(res);
    });
  },
  delete: function (id, cb) {
    orm.deleteOne("burgers", id, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
