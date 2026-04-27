import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      return res
        .status(400)
        .json({ message: "Not authorized Login again(adminAuth.js)" });
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SECERTE);

    if (!verifyToken) {
      return res
        .status(400)
        .json({
          message: "Not authorized Login again, Invalid token(adminAuth.js)",
        });
    }
    req.adminEmail = process.env.ADMIN_EMAIL;
    console.log(adminEmail);
    next();
  } catch (error) {
    console.log("adminAuth error");
    return res.status(500).json({ message: "adminAuth error", error });
  }
};
export default adminAuth;
