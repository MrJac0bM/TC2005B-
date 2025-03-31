const Personaje = require('../models/personaje.model');
const Fuerza = require('../models/fuerza.model');

exports.get_agregar = (request, response, next) => {

    Fuerza.fetchAll().then(([rows, fieldData]) => {
        response.render('agregar_personaje', {
            isLoggedIn: request.session.isLoggedIn || false,
            username: request.session.username || '',
            csrfToken: request.csrfToken(),
            niveles: rows,
        });

    }).catch((error) => {
        console.log(error);
    });

};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const personaje = new Personaje(
        request.body.nombre, request.body.niveles, request.file.filename
        );
        
    personaje.save()
        .then(() => {
            request.session.info = `Personaje ${personaje.nombre} guardado.`;
            response.redirect('/personajes');
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_buscar = (request, response, next) => { 
    console.log(request.params.valor);
    Personaje.find(request.params.valor).then(([rows, fieldData]) => {
        console.log(rows);
        response.status(200).json({personajes: rows});
    }).catch((error) => {
        response.status(500).json({message: "knsadlkjwqenklj Internal Server Error"});
    });
};

exports.get_lista = (request, response, next) => { 
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }

    Personaje.fetch(request.params.id)
        .then(([rows, fielData]) => {
            console.log(fielData);
            console.log(rows);
            response.render('lista_personajes', {
                personajes: rows,
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                info: mensaje,
                privilegios: request.session.privilegios || [],
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_mostrar = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};