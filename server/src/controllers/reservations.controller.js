const Reservation = require('../models/reservations');
const reservationController = {};

reservationController.getReservations = async(req, res) => {
    const {email} = req.params;
    const reservation = await Reservation.find();
    res.json(reservation);
}

reservationController.sendReservation = async(req, res) => {
    const reservation = new Reservation(req.body);

    console.log(reservation);

    await reservation.save();

    res.status(200).json('status: Reservacion Guardada');
};

module.exports = reservationController;
