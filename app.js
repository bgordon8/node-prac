const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");
const pageNotFoundRoute = require("./routes/page-not-found");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoute);
app.use(pageNotFoundRoute);

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
