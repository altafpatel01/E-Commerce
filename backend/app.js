const express = require("express");
const productrouter = require("./router/ProductRoutes");

const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1", productrouter);

module.exports = app;
