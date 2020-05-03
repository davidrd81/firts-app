const express = require('express');
const router = express.Router();

const turnos = require('../controllers/turnos.controller');



router.get('/', turnos.getTurnos);
router.post('/', turnos.createTurno);
router.get('/:id', turnos.getTurno );
router.put('/:id', turnos.editTurno );
router.delete('/:id', turnos.deleteTurno );


module.exports = router;