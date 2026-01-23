import { Router } from "express";
import {
  addAuthorController,
  getAllAuthorsController,
  getAuthorByIdController,
  updateAuthorController,
  deleteAuthorController,
} from "../controllers/authorsControllers.js";
import {
  addAuthorValidation,
  handleValidationErrors,
  mongoIdValidation,
} from "../middleware/validator.js";

const authorRoute = Router();

authorRoute.get("/", getAllAuthorsController);
authorRoute.post(
  "/",
  addAuthorValidation,
  handleValidationErrors,
  addAuthorController,
);

authorRoute.get(
  "/:id",
  mongoIdValidation,
  handleValidationErrors,
  getAuthorByIdController,
);

authorRoute.put(
  "/:id",
  mongoIdValidation,
  addAuthorValidation,
  handleValidationErrors,
  updateAuthorController,
);

authorRoute.delete(
  "/:id",
  mongoIdValidation,
  handleValidationErrors,
  deleteAuthorController,
);

export default authorRoute;
