const dotenv = require('dotenv');
const express = require("express");
const app = express();
const databaseConnection = require("./database.js");
const bookRouter = require("./routes/book_routes.js");
var cors = require("cors");
dotenv.config();

app.use(cors());
databaseConnection();
app.use(express.json());

app.use("/book", bookRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Port is listening to 8080");
});
