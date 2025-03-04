const express = require("express");
const router = express.Router();
const path = require('path')
const bodyParser = require('body-parser');
const pageController = require('./controller/page.controller');

//Declarar variable de Datos 


router.use(bodyParser.urlencoded({ extended: false }));

// Credenciales válidas (deberían almacenarse en una base de datos)


router.get('/', pageController.get_logIn);

router.use('/dashboard', pageController.get_dashboard);

router.use('/logout',pageController.get_logOut);


router.use('/bulmaPage',pageController.get_bulmaPage);


router.use('/pokedex',pageController.get_Pokedex);

router.use('/nexo',pageController.get_Nexo);


router.post('/guardar', pageController.post_guardar);

router.use('/lista', pageController.get_lista);

router.use(express.static(path.join(__dirname, 'public')));

router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});



module.exports = router;
