// Description: Schema for cart items.
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageSrc: [
    {
      src: String,
      imageAlt: String,
      _id: false,
    },
  ],
  price: { type: String, required: true },
  product_type: { type: String, required: true },
  size: String,
  details: String,
  season: String,
  quantity: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;