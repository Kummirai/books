import Author from "../models/authorModel.js";

const getAllAuthorsController = async (req, res) => {
  try {
    const authors = await Author.find({});
    if (authors.length < 1) {
      return res
        .status(404)
        .json({ success: true, message: "No authors found!" });
    }

    return res.status(200).json({
      success: true,
      message: "Authors successfully retrieved",
      data: authors,
    });
  } catch (error) {
    console.log(`Error in getAllAuthorsController ${error.message}`);
    return res.status(500).json("Internal server error");
  }
};

const addAuthorController = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, dateOfBirth, nationality } = req.body;
  try {
    const newAuthor = new Author({
      firstName,
      lastName,
      dateOfBirth,
      nationality,
    });

    const savedAuthor = await newAuthor.save();
    return res.status(201).json({
      success: true,
      message: "New Author Created",
      data: savedAuthor,
    });
  } catch (error) {
    console.log(`Error in addAuthorController ${error.message}`);
    return res.status(500).json("Internal server error");
  }
};

const getAuthorByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id);
    if (!author) {
      return res
        .status(404)
        .json({ success: true, message: "No author found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Author retrieved", data: author });
  } catch (error) {
    console.log(`Error in getAuthorByIdController ${error.message}`);
    return res.status(500).json("Internal server error");
  }
};

const updateAuthorController = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, dateOfBirth, nationality } = req.body;
  try {
    const author = await Author.findByIdAndUpdate(
      id,
      {
        $set: {
          firstName,
          lastName,
          dateOfBirth,
          nationality,
        },
      },
      { new: true },
    );

    if (!author) {
      res
        .status(400)
        .json({ success: false, message: "Could not update author" });
    }

    return res.status(200).json({
      success: true,
      message: "Author successfully updated",
      data: author,
    });
  } catch (error) {
    console.log(`Error in updateAuthorController ${error.message}`);
    return res.status(500).json("Internal server error");
  }
};

const deleteAuthorController = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Author.findByIdAndDelete(id);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Author not found " });
    }

    return res
      .status(204)
      .json({ success: true, message: "Author successfully deleted!" });
  } catch (error) {
    console.error(`Error in deleteAuthorController: ${error.message}`);
    res.status(500).json("Internal server error");
  }
};

export {
  getAllAuthorsController,
  addAuthorController,
  getAuthorByIdController,
  updateAuthorController,
  deleteAuthorController,
};
