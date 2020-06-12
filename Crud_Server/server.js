//Load express framework e body parser helpers
const express = require('express');
const bodyParser = require('body-parser');
// Adicionando CORS em nossa aplicação
var cors = require('cors');
const app = express();
app.use(cors());
//Load fs para manipulação dos arquivos json
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);
//Instanciando Servidor
const server = app.listen(4201, () => {
    console.log('listening on port %s...', server.address().port);
});