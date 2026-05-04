const checkOwnership = (req, res, next) => {
  const authenticatedUserId = req.auth?.userId;
  const requestedStudentId = req.params.id;

  if (!authenticatedUserId) {
    return res.status(401).json({ message: "Authentication required" });
  }

  if (authenticatedUserId.toString() !== requestedStudentId.toString()) {
    return res.status(403).json({ message: "Forbidden: you can only access your own account" });
  }

  next();
};

export default checkOwnership;