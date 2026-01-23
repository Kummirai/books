import { Router } from "express";
import {
  addAuthorController,
  getAllAuthorsController,
  getAuthorByIdController,
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

export default authorRoute;
