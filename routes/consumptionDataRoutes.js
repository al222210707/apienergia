// consumptionDataRoutes.js
const express = require('express');
const router = express.Router();
const ConsumptionData = require('../models/ConsumptionData');

// Ruta para agregar una nueva medición (actualizada para coincidir con la ruta del ESP32)
router.post('/api/mediciones', (req, res) => {
  const { potencia, corriente } = req.body;

  ConsumptionData.createMeasurement(potencia, corriente, (err, measurementId) => {
    if (err) {
      console.error('Error al agregar medición:', err);
      res.status(500).json({ message: 'Error al agregar medición' });
    } else {
      res.status(201).json({ message: 'Medición agregada correctamente', id: measurementId });
    }
  });
});

module.exports = router;
