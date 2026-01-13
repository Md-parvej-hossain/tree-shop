const express = require('express');
const router = express.Router();
const plantesController = require('../controllers/plantesController');

// add plant
router.post('/plantes', plantesController.createPlantes);
// get all plants
router.get('/plantes', plantesController.getPlantes);
// get single plant
router.get('/plantes/:id', plantesController.getPlantesById);
// update plant
router.put('/plantes/:id', plantesController.updatePlantes);
// delete plant
router.delete('/plantes/:id', plantesController.deletePlantes);
// get plants by category
router.get(
  '/plantes/category/:category',
  plantesController.getPlantesByCategory
);

module.exports = router;
