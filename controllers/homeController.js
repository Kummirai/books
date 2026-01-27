const homeController = async (req, res) => {
  return res.status(200).json({
    message: req.user
      ? `Welcome back, ${req.user.displayName}`
      : "You are not logged in",
    project: "Books API",
    login_url: "http://localhost:3000/auth/github",
    logout_url: "http://localhost:3000/auth/github/logout",
    github_url: "https://github.com/Kummirai/books",
    project_api_docs: "https://books-project-xqrb.onrender.com/api-docs",
  });
};

export { homeController };
