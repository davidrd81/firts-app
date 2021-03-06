const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//settings
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/bitacoras', require('./routes/bitacora.routes'));
app.use('/api/turnos', require('./routes/turnos.routes'));

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));

});
