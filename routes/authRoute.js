import { Router } from "express";
import {
  githubAthenticateController,
  githubCallbackController,
} from "../controllers/authController.js";

const authRoute = Router();

authRoute.get("/", githubAthenticateController);
authRoute.get("/callback", githubCallbackController);

export default authRoute;
