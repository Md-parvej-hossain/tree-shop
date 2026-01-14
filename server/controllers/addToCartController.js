const Cards = require('../models/AddtoCart'); // make sure filename matches

// CREATE card
exports.createCards = async (req, res) => {
  console.log(req.body);
  try {
    const cards = await Cards.create(req.body);
    res.status(201).json(cards);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET all cards
exports.getCards = async (req, res) => {
  try {
    const cards = await Cards.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//delete card
exports.deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await Cards.findByIdAndDelete(id);
    if (!deletedCard) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.status(200).json({ message: 'Card deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
