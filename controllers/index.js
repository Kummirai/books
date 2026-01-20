import Book from "../models/bookModel.js";

const getAllBooksController = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      success: true,
      message: "Books successfully retrieved",
      data: books,
    });
  } catch (error) {
    console.error(`Error in getAllBooksController: ${error.message}`);
    res.status(500).json("Internal server error");
  }
};

const getBookByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    return res.status(200).json({
      success: true,
      message: "Book successfully retrieved",
      data: book,
    });
  } catch (error) {
    console.error(`Error in getBookByIdController: ${error.message}`);
    res.status(500).json("Internal Server Error");
  }
};
export { getAllBooksController, getBookByIdController };
