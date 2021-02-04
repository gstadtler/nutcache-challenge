const express = require('express');
const routes = express.Router();
const EmployeesController = require('./controllers/EmployeesController');

routes.get('/api/employees', EmployeesController.index);
routes.get('/api/employees/:id', EmployeesController.show);
routes.post('/api/employees', EmployeesController.create);
routes.put('/api/employees/:id', EmployeesController.update);
routes.delete('/api/employees/:id', EmployeesController.delete);

module.exports = routes;