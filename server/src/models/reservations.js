const {Schema, model} = require('mongoose');

const reservationSchema = new Schema (
    {
        names: {
            type: String,
            required: true
        }, 
        lastnames: {
            type: String,
            required: true
        }, 
        dateStart: {
            type: Date,
            required: true
        },
        dateEnd:{
            type: Date,
            required: true
        },
        activity: {
            type: String,
            required: true
        },
        responsible: {
            type: String,
            required: true
        },
        reservationType:{
            type: String,
            required: true
        },
        participants: {  
            type: Number,
            required: true
        }
    }
);

module.exports = model('Reservation', reservationSchema);

/*

    {
        "names":"Stalin David",
        "lastnames":"Pillajo Masache",
        "dateStart":"2018-03-29T13:34:00",
        "dateEnd":"2018-03-29T15:34:00",
        "activity":"Fisica Teorica",
        "responsible":"Stalin Pillajo",
        "reservationType":"Presencial Equipos y Laboratorio",
        "participant":20,
        "observations":"Ninguna"
    }
*/