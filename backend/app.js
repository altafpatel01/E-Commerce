const express = require("express");
const cors = require('cors');

const productrouter = require("./router/ProductRoutes");

const bodyParser = require("body-parser");

const app = express();

app.use(
    cors({
      origin: 'https://furniroaltafpatel.vercel.app', // Replace with your Vercel frontend URL
      credentials: true, // If using cookies or other credentials
    })
  );
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1", productrouter);

module.exports = app;
