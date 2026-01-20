import Book from "../models/bookModel.js";

const getAllBooksController = async (req, res) => {
  return res.status(200).json("Hello to the books api");
};

export { getAllBooksController };
