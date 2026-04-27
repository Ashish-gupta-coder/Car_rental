import Order from "../model/orderModel.js";
import User from "../model/user.model.js";
export const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const userId = req.userId;
    const orderDate = {
      items,
      amount,
      userId,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new Order(orderDate);
    await newOrder.save();

    await User.findByIdAndUpdate(userId, { cartData: {} });
    return res.status(201).json({ message: "Order Place" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Order Place error" });
  }
};
