// ConsumptionData.js
const db = require('../db')

class ConsumptionData {
  static createMeasurement(potencia, corriente, callback) {
    const newMeasurement = {
      potencia: potencia,
      corriente: corriente,
      created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };

    db.query('INSERT INTO consumptiondata SET ?', newMeasurement, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result.insertId);
      }
    });
  }
}

module.exports = ConsumptionData;
