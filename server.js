import express from "express";
import { connectToDB } from "./models/db.js";
import bookRoutes from "./routes/booksRoutes.js";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };
import authorRoute from "./routes/authorsRoutes.js";
import homeRoute from "./routes/homeRoute.js";
import authRoute from "./routes/authRoute.js";
import { Strategy as GitHubStrategy } from "passport-github2";
import passport from "passport";
import session from "express-session";

dotenv.config();

const app = express();
app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return done(err, user);
      });
    },
  ),
);

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
