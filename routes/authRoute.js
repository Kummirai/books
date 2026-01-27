import { Router } from "express";
import {
  githubAuthenticateController,
  githubCallbackController,
} from "../controllers/authController.js";

const authRoute = Router();

authRoute.get("/", githubAuthenticateController);
authRoute.get("/callback", githubCallbackController);

export default authRoute;
