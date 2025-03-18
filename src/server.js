const express = require('express');
const cors = require('cors');
const taskModel = require('./taskModel');

// Inicializar la app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.json({ message: 'API de gestión de tareas funcionando correctamente' });
});

// Rutas para las tareas
app.get('/api/tasks', (req, res) => {
  const result = taskModel.listarElementos();
  res.status(200).json(result);
});

app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ exito: false, mensaje: 'El título de la tarea es requerido' });
  }
  
  const result = taskModel.agregarElemento(title);
  
  if (!result.exito) {
    return res.status(400).json(result);
  }
  
  res.status(201).json(result);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const result = taskModel.eliminarElemento(id);
  
  if (!result.exito) {
    return res.status(404).json(result);
  }
  
  res.status(200).json(result);
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  
  const result = taskModel.actualizarElemento(id, { nombre: title, activo: completed });
  
  if (!result.exito) {
    return res.status(404).json(result);
  }
  
  res.status(200).json(result);
});

module.exports = app;
