import { Router } from "express";
import {
  getAllBooksController,
  getBookByIdController,
  addBookController,
} from "../controllers/index.js";

const bookRoutes = Router();

bookRoutes.get("/", getAllBooksController);
bookRoutes.get("/:id", getBookByIdController);
bookRoutes.post("/", addBookController);

export default bookRoutes;
