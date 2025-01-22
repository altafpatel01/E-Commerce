const app = require("./app");

require("dotenv").config();

const dbConnection = require("./config/database");
port = process.env.PORT || 3000;

dbConnection();

const server = app.listen(port, () => {
  console.log(`app is running on ${port}`);
});


