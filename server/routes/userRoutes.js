const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

// Create user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getUser);

// Get single user
router.get('/users/:id', userController.getUserById);

// Update user
router.put('/users/:id', userController.updateUser);

// Delete user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
