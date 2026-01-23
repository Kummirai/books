import express from "express";
import { connectToDB } from "./models/db.js";
import bookRoutes from "./routes/booksRoutes.js";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };
import authorRoute from "./routes/authorsRoutes.js";
import homeRoute from "./routes/homeRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoute);

app.use("/", homeRoute);

const appInit = async () => {
  await connectToDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

appInit();
