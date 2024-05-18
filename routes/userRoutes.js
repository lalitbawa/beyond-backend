// Description: This file contains the routes for the user model.
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.post('/login', userController.loginUser);

module.exports = router;