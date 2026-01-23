import { Router } from "express";
import {
  addAuthorController,
  getAllAuthorsController,
} from "../controllers/authorsControllers.js";
import {
  addAuthorValidation,
  handleValidationErrors,
} from "../middleware/validator.js";

const authorRoute = Router();

authorRoute.get("/", getAllAuthorsController);
authorRoute.post(
  "/",
  addAuthorValidation,
  handleValidationErrors,
  addAuthorController,
);

export default authorRoute;
