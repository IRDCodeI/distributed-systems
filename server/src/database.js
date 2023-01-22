//*Exportacion para conexion a MongoDB
const mongoose = require('mongoose'); 
const URLMongoDB = 'mongodb://192.168.100.10:27017/LabFisica'; 

//?Metodo de Conexion
mongoose.connect(URLMongoDB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));

module.exports = mongoose;