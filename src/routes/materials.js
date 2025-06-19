const express = require('express');
const MaterialsController = require('../controllers/materialsController');
const Material = require('../models/material');

function setMaterialsRoutes(app) {
    const router = express.Router();
    const materialsController = new MaterialsController(Material);

    router.post('/', materialsController.createMaterial.bind(materialsController));
    router.get('/', materialsController.getMaterials.bind(materialsController));
    router.put('/:id', materialsController.updateMaterial.bind(materialsController));
    router.delete('/:id', materialsController.deleteMaterial.bind(materialsController));

    app.use('/api/materials', router);
}

module.exports = setMaterialsRoutes;

