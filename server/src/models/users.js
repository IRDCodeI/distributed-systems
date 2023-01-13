//*Definicion de Modelo de Usuario
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        typeUser:{
            type: String,
            required: true
        }
    }, 
    {
        timestamps: true
    }   
);

module.exports = model('User', userSchema);