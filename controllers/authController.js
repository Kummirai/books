import passport from "passport";

const githubAthenticateController = () => {
  passport.authenticate("github", { scope: ["user:mail"] });
};

const githubCallbackController = () => {
  (passport.authenticate("github", { failureRedirect: "/api-docs" }),
    function (req, res) {
      res.redirect("/");
    });
};
export { githubAthenticateController, githubCallbackController };
