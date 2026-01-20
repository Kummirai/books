import Book from "../models/bookModel.js";

const getAllBooksController = async (req, res) => {
  try {
    const books = await Book.find({});

    if (books.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "You do not have any books yet!" });
    }

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

const addBookController = async (req, res) => {
  const {
    title,
    description,
    author,
    publisher,
    publicationDate,
    language,
    pages,
    ISBN_10,
    ISBN_13,
  } = req.body;

  try {
    const newBook = new Book({
      title,
      description,
      author,
      publisher,
      publicationDate,
      language,
      pages,
      ISBN_10,
      ISBN_13,
    });

    const savedBook = await newBook.save();

    return res.status(201).json({
      success: true,
      message: "Book successfully created",
      data: savedBook,
    });
  } catch (error) {
    console.error(`Error in addBookController: ${error.message}`);
    res.status(500).json("Internal server error");
  }
};

export { getAllBooksController, getBookByIdController, addBookController };
