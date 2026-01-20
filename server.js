import express from "express";
import { connectToDB } from "./models/db.js";
import bookRoutes from "./routes/booksRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/books", bookRoutes);

const appInit = async () => {
  await connectToDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

appInit();
