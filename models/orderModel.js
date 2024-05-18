// description: schema for order collection in database
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: 'User',
    required: true,
  },
  items: [
    {
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
      user: { type: String, required: true },
      _id: false,
    },
  ],
  phoneNumber: String,
  cardNumber: String,
  expirationDate: String,
  cvc: String,
  address: String,
  city: String,
  region: String,
  postalCode: String,
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
    default: 'Pending',
    _id: false,
  },
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;