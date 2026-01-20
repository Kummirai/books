import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: Array,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    ISBN_10: {
      type: String,
      required: true,
    },
    ISBN_13: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
