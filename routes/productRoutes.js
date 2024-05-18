// Description: This file contains the routes for the product.
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);

module.exports = router;