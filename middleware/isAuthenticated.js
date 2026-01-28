const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json("You do not have access");
  }
  next();
};

export { isAuthenticated };
