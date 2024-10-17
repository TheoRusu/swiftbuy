import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const jwtToken = authHeader && authHeader.split(" ")[1];

  if (!jwtToken) {
    return res.sendStatus(401);
  }

  jwt.verify(jwtToken, JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.user = user;
    next();
  });
};

export default authenticateToken;
