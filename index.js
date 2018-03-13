const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("exposedfiles"));
app.engine("html", require("ejs").renderFile);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index.html"));

app.listen(process.env.PORT || 3000, () =>
  console.log("Example app listening on port 3000!")
);
