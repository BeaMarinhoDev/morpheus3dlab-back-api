class MaterialsController {
    constructor(materialModel) {
        this.materialModel = materialModel;
    }

    async createMaterial(req, res) {
        try {
            const { name, type, quantity, price } = req.body;
            const parsedPrice = Number(price);
            if (isNaN(parsedPrice)) {
                return res.status(400).json({ error: 'Price must be a valid number' });
            }
            const newMaterial = await this.materialModel.createMaterial(name, type, quantity, parsedPrice);
            res.status(201).json(newMaterial);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create material' });
        }
    }

    async updateMaterial(req, res) {
        try {
            const materialId = req.params.id;
            const { name, type, quantity, price } = req.body;
            const parsedPrice = Number(price);
            if (isNaN(parsedPrice)) {
                return res.status(400).json({ error: 'Price must be a valid number' });
            }
            const updatedMaterial = await this.materialModel.updateMaterial(materialId, name, type, quantity, parsedPrice);
            if (updatedMaterial) {
                res.status(200).json(updatedMaterial);
            } else {
                res.status(404).json({ error: 'Material not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update material' });
        }
    }

    async deleteMaterial(req, res) {
        try {
            const materialId = req.params.id;
            const deleted = await this.materialModel.deleteMaterial(materialId);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Material not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete material' });
        }
    }

    async getMaterials(req, res) {
        try {
            const materials = await this.materialModel.getMaterials();
            res.status(200).json(materials);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve materials' });
        }
    }
}

module.exports = MaterialsController;