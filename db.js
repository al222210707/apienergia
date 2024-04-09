const mysql = require('mysql');

const db = mysql.createConnection({
  host: '154.56.47.52',
  user: 'u196388150_SPDD',
  password: 'JPFf34K$WA^v4%',
  database: 'u196388150_SPDD'
});

db.connect((err) => {
  
  console.log('MySQL conectado');
});

module.exports = db;
