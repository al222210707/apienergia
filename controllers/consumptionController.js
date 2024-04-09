// consumptionDataController.js
const ConsumptionData = require('../models/ConsumptionData');

exports.addMeasurement = (req, res) => {
  const { potencia, corriente } = req.body;
  ConsumptionData.create(null, { potencia, corriente }, (err, result) => {
    if (err) {
      console.error('Error al agregar medición:', err);
      res.status(500).json({ message: 'Error al agregar medición' });
    } else {
      res.status(201).json({ message: 'Medición agregada correctamente' });
    }
  });
};
