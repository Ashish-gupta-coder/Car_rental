import User from "../model/user.model.js";

export const addToCart = async (req, res) => {
  try {
    const { itemId } = req.body;
    const userId = req.userId;
    if (!itemId) {
      return res.status(400).json({ message: "Product ID required" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    let cartData = user.cartData || {};
    cartData[itemId] = (cartData[itemId] || 0) + 1;
    user.cartData = cartData;
    await user.save();
    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cartData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "addToCart error" });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    let cartData = user.cartData || {};

    if (quantity <= 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }

    user.cartData = cartData;
    await user.save();

    res.json({
      success: true,
      message: "Cart updated",
      cartData,
    });
  } catch (error) {
    res.status(500).json({ message: "updateCart error" });
  }
};

export const getUserCart = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cartData = user.cartData || {};

    return res.status(200).json({
      success: true,
      cartData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "getUserCart error" });
  }
};
