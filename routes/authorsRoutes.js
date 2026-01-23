import { Router } from "express";
import { getAllAuthorsController } from "../controllers/authorsControllers.js";

const authorRoute = Router();

authorRoute.get("/", getAllAuthorsController);

export default authorRoute;
