const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

class Client {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    static async createClient(name, email, phone) {
        const result = await pool.query(
            'INSERT INTO clients (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
            [name, email, phone]
        );
        return new Client(result.rows[0].id, result.rows[0].name, result.rows[0].email, result.rows[0].phone);
    }

    static async getClients() {
        const result = await pool.query('SELECT * FROM clients');
        return result.rows.map(row => new Client(row.id, row.name, row.email, row.phone));
    }

    static async updateClient(id, name, email, phone) {
        const result = await pool.query(
            'UPDATE clients SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *',
            [name, email, phone, id]
        );
        return new Client(result.rows[0].id, result.rows[0].name, result.rows[0].email, result.rows[0].phone);
    }

    static async deleteClient(id) {
        await pool.query('DELETE FROM clients WHERE id = $1', [id]);
    }
}

module.exports = Client;