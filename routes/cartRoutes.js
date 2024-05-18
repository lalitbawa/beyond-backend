// Description: This file contains the routes for the cart.
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/', cartController.addToCart);
router.get('/:userId', cartController.getCartItemsByUserId);
router.patch('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteItemFromCart);

module.exports = router;