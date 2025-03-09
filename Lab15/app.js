const express = require('express');
const cookieParser = require('cookie-parser'); // Importar cookie-parser
const bodyParser = require('body-parser');
const app = express();

// Middlewares
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // Asegúrate de usar cookie-parser aquí

// Sessiones
const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
    resave: false,
    saveUninitialized: false,
}));

// Routes
app.use(require('./routes'));

// Inicializando servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});