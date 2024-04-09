// User.js
const db = require('../db')

class User {
  static getAll(callback) {
    db.query('SELECT * FROM Users', callback);
  }

  static getById(id, callback) {
    db.query('SELECT * FROM Users WHERE id_user = ?', id, callback);
  }

  static create(newUser, callback) {
    db.query('INSERT INTO Users SET ?', newUser, callback);
  }

  static update(id, updatedUser, callback) {
    db.query('UPDATE Users SET ? WHERE id_user = ?', [updatedUser, id], callback);
  }

  static delete(id, callback) {
    db.query('DELETE FROM Users WHERE id_user = ?', id, callback);
  }
}

module.exports = User;
