const isAuthenticated = (req, res, next) => {
  console.log(req.user);

  if (req.user === undefined) {
    return res.status(401).json("You do not have access");
  }
  next();
};

export { isAuthenticated };
