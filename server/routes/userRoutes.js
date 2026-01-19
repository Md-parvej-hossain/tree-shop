const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const verifyToken = require('../middleware/verifyToken');

// Create user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', verifyToken, userController.getUser);

// Get single user
router.get('/users/:id', verifyToken, userController.getUserById);

// Update user
router.put('/users/:email', verifyToken, userController.updateUser);
// Update user
router.patch(
  '/users/role/:email',
  verifyToken,
  userController.updateUserRole,
);

// Delete user
router.delete('/users/:id', verifyToken, userController.deleteUser);

router.get('/users/role/:email', verifyToken, userController.getUserRole);
module.exports = router;
