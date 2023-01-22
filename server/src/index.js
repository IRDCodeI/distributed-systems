//*Exportaciones para API Rest
const express = require('express');
const app = express();
const routes = require("./routes/server.routes");
const cors = require('cors');
const {mongoose} = require('./database');
const morgan = require('morgan')

//?Configuraciones
app.set('puerto', process.env.PORT || 3000);
app.use(morgan('dev'))
app.use(express.json());
app.use(cors());
app.use('/api/lab', routes);

//TODO: Inicio de API-REST
app.listen(app.get('puerto'));