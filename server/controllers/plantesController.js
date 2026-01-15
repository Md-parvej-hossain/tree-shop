const Plantes = require('../models/Plantes');

// CREATE plant
exports.createPlantes = async (req, res) => {
  try {
    const plantes = await Plantes.create(req.body);
    res.status(201).json(plantes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET all plants
exports.getPlantes = async (req, res) => {
  try {
    const plantes = await Plantes.find();
    res.status(200).json(plantes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET single plant
exports.getPlantesById = async (req, res) => {
  try {
    const plantes = await Plantes.findById(req.params.id);
    if (!plantes) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.status(200).json(plantes);
  } catch (error) {
    res.status(400).json({ message: 'Invalid plant ID' });
  }
};

// UPDATE plant
exports.updatePlantes = async (req, res) => {
  try {
    const plantes = await Plantes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!plantes) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.status(200).json(plantes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE plant
exports.deletePlantes = async (req, res) => {
  try {
    const plantes = await Plantes.findByIdAndDelete(req.params.id);
    if (!plantes) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.status(200).json({ message: 'Plant deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPlantesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const plantes = await Plantes.find({ category });
    res.status(200).json(plantes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getPlantsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const plants = await Plantes.find({ type });
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
