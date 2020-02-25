const bitacoraCtrl = {};
const Bitacora = require('../models/bitacora');

bitacoraCtrl.getBitacoras = async (req, res) => {
  const bitacoras = await Bitacora.find();
  res.json(bitacoras);
}


bitacoraCtrl.createBitacora = async (req, res) => {
      const newbitacora = new Bitacora({
        name: req.body.name,
        position: req.body.position
        
      });
      await newbitacora.save();
      res.json({
        status: 'bitacora guardada'
      });
  }

  bitacoraCtrl.getBitacora = async (req, res) => { 
    const bitacora = await Bitacora.findById(req.params.id);
    res.json(bitacora);
  }

bitacoraCtrl.editBitacora = async (req, res) => {
  const bitacora = req.body;
  const editarb = await Bitacora.findByIdAndUpdate(req.params.id, {$set: bitacora}, {new: true});
  res.json({
    status: 'bitacora editada'
  });
  }

bitacoraCtrl.deleteBitacora = async (req, res) => {
  await Bitacora.findByIdAndRemove(req.params.id);
  res.json({
    status: 'bitacora borrada'
  });
  }


module.exports = bitacoraCtrl;