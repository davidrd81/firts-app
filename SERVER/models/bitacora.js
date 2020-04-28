const mongoose = require('mongoose');
const { Schema } = mongoose;

const BitacoraSchema = new Schema({
        id: {type: Number},
        name: {type: String},
        usuario: {type: String},
        turno: {type: String},
        area: {type: String},
        position: {type: String},
});

module.exports = mongoose.model('bitacora', BitacoraSchema);