import Author from "../models/authorModel.js";

const getAllAuthorsController = async (req, res) => {
  try {
    const authors = await Author.find({});
    if (authors.length < 1) {
      return res
        .status(200)
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

export { getAllAuthorsController, addAuthorController };
