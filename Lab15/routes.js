const express = require("express");
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const pageController = require('./controller/page.controller');

// Middleware para parsear el cuerpo de las solicitudes
router.use(bodyParser.urlencoded({ extended: false }));

// Rutas
router.get('/', pageController.get_logIn);
router.post('/dashboard', pageController.post_login);
router.get('/dashboard', pageController.get_dashboard);
router.get('/logout', pageController.get_logOut);
router.use('/bulmaPage', pageController.get_bulmaPage);
router.use('/pokedex', pageController.get_Pokedex);
router.use('/nexo', pageController.get_Nexo);
router.use('/guardar', pageController.post_guardar);
router.use('/lista', pageController.get_lista);

// Middleware para servir archivos estáticos
router.use(express.static(path.join(__dirname, 'public')));

// Manejo de errores 404
router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = router;