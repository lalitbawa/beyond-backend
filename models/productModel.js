//description: schema for products collection in database
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
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
  size: [
    {
      xxs: Boolean,
      xs: Boolean,
      s: Boolean,
      m: Boolean,
      l: Boolean,
      xl: Boolean,
      _id: false,
    },
  ],
  details: String,
  season: String,
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;