const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
  burger.all((data) => {
    let hbsObj = {
      burgers: data,
    };
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(req.body.burger_name, req.body.devoured, (result) => {
    res.json(result);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  let id = req.params.id;
  let newStatus;

  if (parseInt(req.body.devoured) === 1) {
    newStatus = 0;
  } else {
    newStatus = 1;
  }

  burger.update(newStatus, id, (result) => {
    res.json(result);
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  let id = req.params.id;
  burger.delete(id, (result) => {
    res.json(result);
  });
});
module.exports = router;
