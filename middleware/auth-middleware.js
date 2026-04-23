import jwt from "jsonwebtoken";

const authCheck = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Missing Authorization header" });
    }

    const [scheme, token] = authHeader.split(" ");

    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({ error: "Token missing from Bearer string" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.auth = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export default authCheck;