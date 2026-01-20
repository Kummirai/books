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

export default bookRoutes;
