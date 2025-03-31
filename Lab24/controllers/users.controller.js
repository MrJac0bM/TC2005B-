const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_signup = (request, response, next) => {
    response.render('login.ejs', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        isNew: true,
        csrfToken: request.csrfToken(),
    });
};

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new 
        Usuario(request.body.username, request.body.password);

    nuevo_usuario.save().then(() => {
        response.redirect('/users/login');
    }).catch((error) => {
        console.log(error);
    });
};

exports.get_login = (request, response, next) => {
    response.render('login.ejs', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        isNew: false,
        csrfToken: request.csrfToken(),
    });
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username).then(([rows, fieldData]) => {
        if (rows.length > 0) {
            bcrypt.compare(request.body.password, rows[0].password)
                .then((doMatch) => {
                    if (doMatch) {
                        request.session.username = rows[0].username;
                        request.session.isLoggedIn = true;
                        Usuario.getPrivilegios(rows[0].username).then(([privilegios, fieldData]) => {
                            request.session.privilegios = [];
                            for(let privilegio of privilegios) {
                                request.session.privilegios.push(privilegio);
                            }
                            return request.session.save(err => {
                                response.redirect('/personajes');
                            });
                        }).catch((error) => {
                            console.log(error);
                        });
                    } else {
                        response.redirect('/users/login');
                    }
            }).catch((error) => {
                console.log(error);
            });
        } else {
            response.redirect('/users/login');
        }
    }).catch((error) => {
        console.log(error);
    });
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        //Este código se ejecuta cuando la sesión se elimina.
        response.redirect('/users/login'); 
    });
};