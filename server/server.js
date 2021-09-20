var express = require("express");
var app = express();
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
var port = process.env.PORT || 3001;
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(port, function () {
  //eslint-disable-next-line no-console
  console.log("App running at http://localhost:" + port);
});
