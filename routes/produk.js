Const express = require(“express”);

Const router = express.Router();

Const db = require(“../db”);



Router.get(“/”, (req, res) => {

  Db.query(“SELECT * FROM produk”, (err, rows) => {

    Res.render(“produk”, { produk: rows });

  });

});



Module.exports = router;

