const CartItem = require('../models/cartModel');

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const cartItem = await CartItem.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all cart items of a user by _id

exports.getCartItemsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await CartItem.find({ user: userId });
    res.json(cartItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Update cart items quantity
exports.updateCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const updatedCartItem = await CartItem.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    res.json(updatedCartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete items from cart
exports.deleteItemFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    await CartItem.findByIdAndDelete(id);
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};