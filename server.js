import express from "express";
import { connectToDB } from "./models/db.js";
import bookRoutes from "./routes/booksRoutes.js";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };
import authorRoute from "./routes/authorsRoutes.js";
import homeRoute from "./routes/homeRoute.js";
import authRoute from "./routes/authRoute.js";
import passport from "passport";
import session from "express-session";
import cors from "cors";

dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(
  session({
    secret: "MYSECRET",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoute);
app.use("/auth/github", authRoute);

app.use("/", homeRoute);

const appInit = async () => {
  await connectToDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

appInit();
