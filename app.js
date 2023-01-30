const express = require('express');
const morgan = require('morgan');
const routerMain = require('./src/routes/main');
const routerUser = require('./src/routes/user');

const port = process.env.PORT || 3001;

const app = express();
//configura carpeta estatica del proyecto
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(morgan('dev'));



app.use(routerMain);
app.use(routerUser);

app.listen(port, () => console.log(`servidor escuchando en puerto ${port}`));
//git test