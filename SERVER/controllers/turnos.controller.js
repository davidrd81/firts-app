const turnosCtrl = {};
const Turno = require('../models/turnos.model');

turnosCtrl.getTurnos = async (req, res) => {
  const Turnos = await Turno.find();
  res.json(Turnos);
}


turnosCtrl.createTurno = async (req, res) => {
      const newturno = new Turno({
        idt: req.body.idt,
        turno: req.body.turno
      });
      await newturno.save();
      res.json({
        status: 'turno guardado'
      });
  }

  turnosCtrl.getTurno = async (req, res) => { 
    const turno = await Turno.findById(req.params.id);
    res.json(turno);
  }

  turnosCtrl.editTurno = async (req, res) => {
  const turno = req.body;
  const editarT = await Turno.findByIdAndUpdate(req.params.id, {$set: turno}, {new: true});
  res.json({
    status: 'turno editada'
  });
  }

  turnosCtrl.deleteTurno = async (req, res) => {
  await Turno.findByIdAndRemove(req.params.id);
  res.json({
    status: 'turno borrada'
  });
  }


module.exports = turnosCtrl;