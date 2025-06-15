const { Book } = require("../model/book_model.js");

// to add date in app
const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;

    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.Author ||
      !body.SellingPrice
    ) {
      return res
        .status(400)
        .json({ Message: "All field's are required", Success: false });
    }

    const bookAdd = await Book.insertOne(body);

    if (bookAdd) {
      return res.status(201).json({
        Message: "Data created successfully !",
        Id: bookAdd?._id,
        Success: true,
      });
    }
  } catch (err) {
    return res.status(500).json({ Message: err.message, Success: false });
  }
};

const handleBookListController = async (req, res) => {
  try {
    const bookList = await Book.find({});
    return res.status(200).json({
      Message: "All items are shown",
      Success: true,
      TotalCount: bookList.length,
      BookList: bookList,
    });
  } catch (err) {
    return res.status(400).json({ Message: err.message, Success: false });
  }
};

handleBookDeleteController = async (req, res) => {
  const body = req.body;
  try {
    const deleted = await Book.deleteOne({ _id: body.Id });
    console.log("deleted", deleted);
    if (deleted.acknowledged) {
      return res.json({
        Message: "Book deleted successfully",
        Success: true,
      });
    }
  } catch (err) {
    return res.status(400).json({ Message: err.message, success: false });
  }
};

const handleBookUpdateController = async (req, res) => {
  try {
    const body = req.body;
    const updating = await Book.updateOne({ _id: body?.Id }, { $set: body });
    if (updating?.acknowledged) {
      return res
        .status(200)
        .json({ Message: "Book updated Successfully!", Success: true });
    }
  } catch (err) {
    return res.status(400).json({ Message: err.message, success: false });
  }
};
module.exports = {
  handleBookStoreController,
  handleBookListController,
  handleBookDeleteController,
  handleBookUpdateController,
};
