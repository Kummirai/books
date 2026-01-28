const homeController = async (req, res) => {
  return res.status(200).json({
    user: req.user
      ? `${req.user.displayName}, you are logged in`
      : "You are not logged in",
    project: "Books API",
    login_url: "https://books-project-xqrb.onrender.com/auth/github",
    logout_url: "https://books-project-xqrb.onrender.com/auth/github/logout",
    github_url: "https://github.com/Kummirai/books",
    project_api_docs: "https://books-project-xqrb.onrender.com/api-docs",
  });
};

export { homeController };
