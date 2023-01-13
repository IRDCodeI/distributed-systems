//*Definicion de Modelo de Servicio
const { Schema, model } = require('mongoose');

const serviceSchema = new Schema(
    {
       type: String,
       scope: String,
       subject: String,
       desc: String,
       urlimg: String
    }, 
    {
        timestamps: true
    }   
);

module.exports = model('Service', serviceSchema);

/*
    {
        "type":"Prestamos de Libros",
        "scope":"Cliente",
        "subject":"Quimica, Fisica, Matematicas",
        "desc":"Realizamos prestamos de libros para que el estudiante puede tener acceso al conocmiento y autoeduciacion por el mismo",
        "urlimg":"https://www.comunidadbaratz.com/wp-content/uploads/Hay-muchisimos-libros-en-las-bibliotecas-pero-solamente-unos-pocos-comparten-el-privilegio-de-ser-los-mas-prestados.jpg"
    }
*/