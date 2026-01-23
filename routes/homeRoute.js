import { Router } from "express";
import { homeController } from "../controllers/homeController.js";

const homeRoute = Router();

/**
 * @swagger
 *  ignore: true
 */
homeRoute.get("/", homeController);

export default homeRoute;
