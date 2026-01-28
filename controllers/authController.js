import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

const githubAuthenticateController = (req, res, next) => {
  passport.authenticate("github", {
    scope: ["user:email"],
  })(req, res, next);
};

const githubCallbackController = (req, res, next) => {
  passport.authenticate("github", {
    failureRedirect: "/api-docs",
    successRedirect: "/",
  })(req, res, next);
};

const logoutController = async (req, res) => {
  req.logout(() => {
    if (req.accepts("json") && !req.accepts("html")) {
      return res.status(200).json({
        success: true,
        message: "Logout successful",
      });
    }

    res.redirect("/");
  });
};

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL:
        "https://books-project-xqrb.onrender.com/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const user = await User.findOne({ githubId: profile.id });
        if (!user) {
          const newUser = new User({
            displayName: profile.displayName,
            githubId: profile.id,
          });

          const user = await newUser.save();
          return done(null, user);
        } else {
          return done(null, user);
        }
      } catch (error) {
        console.log(`Error in github strategy middleware ${error.message}`);
        return done(error, null);
      }
    },
  ),
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

export {
  githubAuthenticateController,
  githubCallbackController,
  logoutController,
};
