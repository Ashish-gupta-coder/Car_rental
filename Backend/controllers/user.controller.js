import User from "../model/user.model.js";

export const genCurrentUser = async (req, res) => {
  try {
    let id = req.userId;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(400).json({ message: "user does not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "get current user error" });
  }
};

export const getAdmin = async (req, res) => {
  try {
    let adminEmail = req.adminEmail;
    if (!adminEmail) {
      return res.status(404).json({ message: "Admin is not found" });
    }
    return res.status(201).json({
      email: adminEmail,
      role: "admin",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "getAdmin error", error });
  }
};
