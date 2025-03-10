const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');

const personajes_controller = require('../controllers/personajes.controller');

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
router.get('/agregar', isAuth, personajes_controller.get_agregar);
router.get('/add', isAuth, personajes_controller.get_agregar);

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
router.post('/agregar', isAuth, personajes_controller.post_agregar);

router.get('/mostrar', isAuth, personajes_controller.get_mostrar);

router.get('/:id', isAuth, personajes_controller.get_lista);
router.get('/', isAuth, personajes_controller.get_lista);

module.exports = router;