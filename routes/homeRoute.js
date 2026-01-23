import { Router } from "express";
import { homeController } from "../controllers/homeController";

const homeRoute = Router();

homeRoute.get("/", homeController);

export default homeRoute;
