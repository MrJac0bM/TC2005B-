
const path = require('path')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');


//Middlewares
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));


//Public
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res)=>{
    res.status(404).send(page404);
})
//Routes
app.use(require('./routes'));

// Inicializando servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

