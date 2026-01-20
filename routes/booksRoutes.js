import { Router } from "express";
import {
  getAllBooksController,
  getBookByIdController,
} from "../controllers/index.js";

const bookRoutes = Router();

bookRoutes.get("/", getAllBooksController);
bookRoutes.get("/:id", getBookByIdController);

export default bookRoutes;
