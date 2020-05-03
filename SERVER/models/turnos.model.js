const mongoose = require('mongoose');
const { Schema } = mongoose;

const TurnoSchema = new Schema({
        idt: Number,
        turno: String,
});

module.exports = mongoose.model('turnos', TurnoSchema);