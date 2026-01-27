import { Router } from "express";
import {
  githubAuthenticateController,
  githubCallbackController,
  logoutController,
} from "../controllers/authController.js";

const authRoute = Router();

authRoute.get("/", githubAuthenticateController);
authRoute.get("/callback", githubCallbackController);
authRoute.get("/logout", logoutController);

export default authRoute;
