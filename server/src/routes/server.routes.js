//*Exportacion para rutas/accion
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const user = require('../controllers/user.controller');
const service = require('../controllers/services.controller');
const reservation = require('../controllers/reservations.controller');

const { request } = require('express');
const { getReservations } = require('../controllers/reservations.controller');

//?Rutas de accion Usuario
router.get('/user/:email', user.getUsers);
router.post('/user/register', user.registerUser);
router.post('/user/login', user.loginUser);
router.put('/user/dashboard/put', verifyToken, user.updateUser);
router.get('/user/dashboard', verifyToken, user.getDash)

//?Rutas de accion Servicios
router.get('/service', service.getServices);
router.post('/service/post', service.setServices);
router.put('/service/put', service.updateService);
router.delete('/service/delete/:id', service.deleteService);

//?Rutas de accion Reservas

router.get('/reservation/:email', reservation.getReservations);
router.post('/reservation/post', reservation.sendReservation);

module.exports = router; 

function verifyToken(req, res, next) {
    if(!req.headers.authorization){
        return res.status(401).send('No autorizado');
    } 

    const token = req.headers.authorization.split(' ')[1];

    if(token === 'null'){
        return res.status(401).send('No autorizado');
    }

    const payload = jwt.verify(token, 'secret');
    req.userId = payload._id;
    next();
};