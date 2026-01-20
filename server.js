import express from "express";
import { connectToDB } from "./models/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).json("Hello to the books api");
});

const appInit = async () => {
  await connectToDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

appInit();
