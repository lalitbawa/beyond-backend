const Order = require('../models/orderModel');

// sends order object to order collection in database
exports.createOrder = async (req, res) => {
  try {
    const { user, items } = req.body;
    const order = await Order.create({ user, items });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// gets all orders from order collection in database
exports.getUserOrders = async (req, res) => {
  try {
    const { user } = req.query;
    const orders = await Order.find({ user });
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};