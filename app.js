const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");
const pageNotFoundRoute = require("./routes/page-not-found");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoute);
app.use(pageNotFoundRoute);

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
