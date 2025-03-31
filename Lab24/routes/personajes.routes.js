const express = require('express');
const router = express.Router();

const isAuth = require('../util/is-auth');
const canCreatePersonaje = require('../util/canCreatePersonaje');
const canViewPersonaje = require('../util/canViewPersonajes');

const personajes_controller = require('../controllers/personajes.controller');

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
router.get('/agregar', isAuth, canCreatePersonaje, personajes_controller.get_agregar);
router.get('/add', isAuth, canCreatePersonaje, personajes_controller.get_agregar);

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
router.post('/agregar', isAuth, canCreatePersonaje, personajes_controller.post_agregar);

router.get('/mostrar', isAuth, personajes_controller.get_mostrar);

router.get('/buscar/:valor', isAuth, canViewPersonaje, personajes_controller.get_buscar);
router.get('/buscar', isAuth, canViewPersonaje, personajes_controller.get_buscar);


router.get('/:id', isAuth, canViewPersonaje, personajes_controller.get_lista);
router.get('/', isAuth, canViewPersonaje, personajes_controller.get_lista);

module.exports = router;