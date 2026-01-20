import { Router } from "express";
import { getAllBooksController } from "../controllers/index.js";

const bookRoutes = Router();

bookRoutes.get("/", getAllBooksController);

export default bookRoutes;
