import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";

dotenv.config();

const githubAuthenticateController = (req, res, next) => {
  passport.authenticate("github", { scope: ["user:email"] })(req, res, next);
};

const githubCallbackController = () => {
  (passport.authenticate("github", { failureRedirect: "/api-docs" }),
    function (req, res) {
      res.redirect("/");
    });
};

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3000/auth/github/callback",
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

export { githubAuthenticateController, githubCallbackController };
