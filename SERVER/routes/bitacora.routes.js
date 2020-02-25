const express = require('express');
const router = express.Router();

const bitacora = require('../controllers/bitacora.controller');



router.get('/', bitacora.getBitacoras );
router.post('/', bitacora.createBitacora );
router.get('/:id', bitacora.getBitacora );
router.put('/:id', bitacora.editBitacora );
router.delete('/:id', bitacora.deleteBitacora );


module.exports = router;