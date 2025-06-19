const { Pool } = require('pg');
const db = require('../db');

class Material {
    constructor(id, name, type, quantity, price) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.quantity = quantity;
        this.price = price;
    }

    static async createMaterial(name, type, quantity, price) {
        const query = 'INSERT INTO materials (name, type, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [name, type, quantity, price];
        const result = await db.query(query, values);
        const row = result.rows[0];
        return new Material(row.id, row.name, row.type, row.quantity, row.price);
    }

    static async getMaterials() {
        const query = 'SELECT * FROM materials';
        const result = await db.query(query);
        return result.rows.map(row => new Material(row.id, row.name, row.type, row.quantity, row.price));
    }

    static async updateMaterial(id, name, type, quantity, price) {
        const query = 'UPDATE materials SET name = $1, type = $2, quantity = $3, price = $4 WHERE id = $5 RETURNING *';
        const values = [name, type, quantity, price, id];
        const result = await db.query(query, values);
        const row = result.rows[0];
        return row ? new Material(row.id, row.name, row.type, row.quantity, row.price) : null;
    }

    static async deleteMaterial(id) {
        const query = 'DELETE FROM materials WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await db.query(query, values);
        return result.rows[0];
    }
}

module.exports = Material;