import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Books API",
    description: "An api for books and authors",
  },
  // host: "books-project-xqrb.onrender.com",
  // schemes: ["https"],
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const routes = ["./server.js"];

swaggerAutogen()(outputFile, routes, doc);
