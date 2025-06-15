const express = require("express");
const {
  handleBookStoreController,
  handleBookListController,
  handleBookDeleteController,
  handleBookUpdateController,
} = require("../controller/book_controller.js");

const router = express.Router();
// to add date in app
router.post("/addbook", handleBookStoreController);

//get the book details
router.get("/booklists", handleBookListController);
router.post("/deletebook", handleBookDeleteController);
router.put("/updatebook", handleBookUpdateController);

module.exports = router;
