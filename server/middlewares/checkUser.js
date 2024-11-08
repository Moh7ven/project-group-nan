import { verifyToken } from "../utils/jwt.js";
import Users from "../models/Users.js";

export const checkUser = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (token) {
      const verify = await verifyToken(token);

      if (verify) {
        const user = await Users.findById(verify.userId);
        if (user) {
          res.locals.userId = verify.userId;
          next();
        } else res.status(403).send("User not found");
      } else res.status(403).send("Token not valid");
    } else res.status(403).send("Token not found");
  } catch (error) {
    console.log("error token", error.message);
    res.status(502).json({
      error: error.message,
      status: false,
    });
  }
};
