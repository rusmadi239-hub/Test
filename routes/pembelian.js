Const express = require(“express”);

Const router = express.Router();

Const db = require(“../db”);



Router.get(“/”, (req, res) => {

  Db.query(

    “SELECT pembelian.*, produk.nama FROM pembelian JOIN produk ON pembelian.produk_id=produk.id”,

    (err, rows) => {

      Db.query(“SELECT * FROM produk”, (err2, produkList) => {

        Res.render(“pembelian”, { pembelian: rows, produk: produkList });

      });

    }

  );

});



// Tambah pembelian

Router.post(“/add”, (req, res) => {

  Const { produk_id, qty } = req.body;



  Db.query(“SELECT harga FROM produk WHERE id=?”, [produk_id], (err, result) => {

    Const total = result[0].harga * qty;



    Db.query(

      “INSERT INTO pembelian (produk_id, qty, total) VALUES (?, ?, ?)”,

      [produk_id, qty, total],

      () => res.redirect(“/pembelian”)

    );

  });

});



// Cancel pembelian

Router.get(“/cancel/:id”, (req, res) => {

  Db.query(

    “UPDATE pembelian SET status=’cancel’ WHERE id=?”,

    [req.params.id],

    () => res.redirect(“/pembelian”)

  );

});



Module.exports = router;

               
