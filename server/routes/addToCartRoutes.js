const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/addToCartController');

// add card
router.post('/cards', cardsController.createCards);

// get all cards
router.get('/cards', cardsController.getCards);

// delete card
router.delete('/cards/:id', cardsController.deleteCard);
module.exports = router;
