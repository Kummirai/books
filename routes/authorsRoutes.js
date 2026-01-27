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
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const authorRoute = Router();

authorRoute.get("/", getAllAuthorsController);
authorRoute.post(
  "/",
  isAuthenticated,
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
  isAuthenticated,
  mongoIdValidation,
  addAuthorValidation,
  handleValidationErrors,
  updateAuthorController,
);

authorRoute.delete(
  "/:id",
  isAuthenticated,
  mongoIdValidation,
  handleValidationErrors,
  deleteAuthorController,
);

export default authorRoute;
