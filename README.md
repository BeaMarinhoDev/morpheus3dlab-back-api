# My API Project

This project is a RESTful API built with JavaScript using Express and PostgreSQL. It provides endpoints for managing clients and materials, specifically filaments.

## Features

- Create, read, update, and delete (CRUD) operations for clients
- Create, read, update, and delete (CRUD) operations for materials
- PostgreSQL as the database for persistent storage

## Project Structure

```
my-api-project
├── src
│   ├── controllers          # Contains the logic for handling requests
│   │   ├── clientsController.js
│   │   └── materialsController.js
│   ├── models               # Defines the data structure and database interactions
│   │   ├── client.js
│   │   └── material.js
│   ├── routes               # Sets up the API routes
│   │   ├── clients.js
│   │   └── materials.js
│   ├── db.js                # Database connection setup
│   └── app.js               # Entry point of the application
├── package.json             # Project dependencies and scripts
├── .env                     # Environment variables for configuration
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-api-project
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your PostgreSQL connection details:
   ```
   DATABASE_URL=your_database_url
   ```

## Usage

To start the server, run:
```
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

### Clients

- `POST /clients` - Create a new client
- `GET /clients` - Retrieve all clients
- `PUT /clients/:id` - Update a client by ID
- `DELETE /clients/:id` - Delete a client by ID

### Materials

- `POST /materials` - Create a new material
- `GET /materials` - Retrieve all materials
- `PUT /materials/:id` - Update a material by ID
- `DELETE /materials/:id` - Delete a material by ID

## License

This project is licensed under the MIT License.