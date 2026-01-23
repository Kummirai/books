import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Books API",
    description: "An api for books and authors",
  },
  host: "books-project-xqrb.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const routes = ["./server.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
