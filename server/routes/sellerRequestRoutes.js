const express = require('express');
const router = express.Router();
const controller = require('../controllers/sellerRequestController');
// const verifyToken = require('../middleware/verifyToken');
// const verifyAdmin = require('../middleware/verifyAdmin');

router.post('/seller-requests', controller.createRequest);
router.get('/seller-requests', controller.getAllRequests);
router.get('/seller-requests/:email', controller.getMyRequest);
router.patch('/seller-requests/:id', controller.updateStatus);
router.delete('/seller-requests/:id', controller.deleteRequest);

module.exports = router;
