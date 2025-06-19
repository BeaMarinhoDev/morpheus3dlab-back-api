const express = require('express');
const bodyParser = require('body-parser');
const setClientsRoutes  = require('./routes/clients');
const setMaterialsRoutes  = require('./routes/materials');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

setClientsRoutes(app);
setMaterialsRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});