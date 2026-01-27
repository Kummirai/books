import { Router } from "express";
import {
  addBookValidation,
  handleValidationErrors,
  mongoIdValidation,
} from "../middleware/validator.js";
import {
  getAllBooksController,
  getBookByIdController,
  addBookController,
  updateBookController,
  deleteBookController,
} from "../controllers/booksControllers.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const bookRoutes = Router();

bookRoutes.get("/", getAllBooksController);

bookRoutes.get(
  "/:id",
  mongoIdValidation,
  handleValidationErrors,
  getBookByIdController,
);

bookRoutes.post(
  "/",
  isAuthenticated,
  addBookValidation,
  handleValidationErrors,
  addBookController,
);

bookRoutes.put(
  "/:id",
  isAuthenticated,
  mongoIdValidation,
  addBookValidation,
  handleValidationErrors,
  updateBookController,
);

bookRoutes.delete(
  "/:id",
  isAuthenticated,
  mongoIdValidation,
  handleValidationErrors,
  deleteBookController,
);

export default bookRoutes;
