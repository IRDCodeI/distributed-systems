
const service = require('../models/services');
const serviceController = {};
const jwt = require('jsonwebtoken');

serviceController.getServices = async(req, res) => {     
    const servicios = await service.find();
    res.json(servicios);
}; 
 
serviceController.setServices = async(req, res) => {
    const servicio = new service(req.body);
    await servicio.save();

    res.status(200).json('stauts: Servicio Almacenado');
};

serviceController.updateService = async(req, res) => {
    const servicio = {
        type: req.body.type,
        scope: req.body.scope,
        subject: req.body.subject,
        desc: req.body.desc,
        urlimg: req.body.urlimg
    }

    const getService = await service.findOne({type: servicio.type});

    await service.findByIdAndUpdate({_id: getService._id}, {$set: servicio}, {new: true});

    res.status(200).json('status: Servicio Actualizado');
};

serviceController.deleteService = async(req, res) => {
    const {id} = req.params;

    await service.findByIdAndDelete({_id: id});

    res.status(200).json('status: Servicio Eliminado');
};

module.exports = serviceController; 