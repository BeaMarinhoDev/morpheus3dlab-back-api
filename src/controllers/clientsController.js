const Client = require('../models/client');

class ClientsController {
    async createClient(req, res) {
        try {
            const { name, email, phone } = req.body;
            const newClient = await Client.createClient(name, email, phone);
            res.status(201).json(newClient);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create client' });
        }
    }

    async updateClient(req, res) {
        try {
            const clientId = req.params.id;
            const { name, email, phone } = req.body;
            const updatedClient = await Client.updateClient(clientId, name, email, phone);
            if (updatedClient) {
                res.status(200).json(updatedClient);
            } else {
                res.status(404).json({ error: 'Client not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update client' });
        }
    }

    async deleteClient(req, res) {
        try {
            const clientId = req.params.id;
            await Client.deleteClient(clientId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete client' });
        }
    }

    async getClients(req, res) {
        try {
            const clients = await Client.getClients();
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve clients' });
        }
    }
}

module.exports = ClientsController;