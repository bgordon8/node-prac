const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.urlencoded({ extended: true }));

app.use("/add-route", (req, res, next) => {
  console.log("in the middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>'
  );
});

app.use("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in the next middleware");
  res.send("<h1>hello from express</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
