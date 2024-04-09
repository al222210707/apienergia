// userController.js
const User = require('../models/User');

exports.getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ users });
    }
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, user) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      res.json({ user });
    }
  });
};

exports.createUser = (req, res) => {
  const { nombre, app, apm, email, password, telefono, fn } = req.body;
  User.create({ nombre, app, apm, email, password, telefono, fn }, (err, userId) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Usuario creado exitosamente', id: userId });
    }
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const userData = req.body;
  User.update(id, userData, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Usuario actualizado exitosamente' });
    }
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Usuario eliminado exitosamente' });
    }
  });
};
