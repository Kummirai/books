import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";

dotenv.config();

const githubAuthenticateController = (req, res, next) => {
  console.log("Starting GitHub authentication...");

  passport.authenticate("github", {
    scope: ["user:email"],
    state: req.query.redirect || "/",
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
    res.status(200).json({ success: true, message: "Logout successfully" });
  });
};

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ githubId: profile.id }, function (err, user) {
      console.log(profile);
      return done(null, profile);
      // });
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
