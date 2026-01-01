Const express = require(“express”);

Const app = express();

Const path = require(“path”);

Const produkRoute = require(“./routes/produk”);

Const pembelianRoute = require(“./routes/pembelian”);



App.use(express.urlencoded({ extended: true }));

App.use(express.static(“public”));

App.set(“view engine”, “ejs”);



App.use(“/produk”, produkRoute);

App.use(“/pembelian”, pembelianRoute);



App.get(“/”, (req, res) => {

  Res.render(“dashboard”);

});



App.listen(3000, () => console.log(“Server running on port 3000”));

