const express = require('express');
const ClientsController = require('../controllers/clientsController');

const router = express.Router();
const clientsController = new ClientsController();

function setClientsRoutes(app) {
    app.use('/api/clients', router);

    router.get('/', clientsController.getClients.bind(clientsController));
    router.post('/', clientsController.createClient.bind(clientsController));
    router.put('/:id', clientsController.updateClient.bind(clientsController));
    router.delete('/:id', clientsController.deleteClient.bind(clientsController));
}

module.exports = setClientsRoutes;