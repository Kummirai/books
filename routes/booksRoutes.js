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
} from "../controllers/index.js";

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
  addBookValidation,
  handleValidationErrors,
  addBookController,
);
bookRoutes.put(
  "/:id",
  mongoIdValidation,
  addBookValidation,
  handleValidationErrors,
  updateBookController,
);

export default bookRoutes;
