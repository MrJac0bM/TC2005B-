// Importa el modelo de usuario para interactuar con la base de datos.
const Usuario = require('../models/usuario.model'); 

// Importa bcryptjs para el manejo de contraseñas (hashing y comparación segura).
const bcrypt = require('bcryptjs');  

// Controlador para mostrar la vista de registro de usuario.
exports.get_signup = (request, response, next) => {
    response.render('login.ejs', { // Renderiza la plantilla 'login.ejs'.
        isLoggedIn: request.session.isLoggedIn || false, // Indica si el usuario está autenticado.
        username: request.session.username || '', // Si hay sesión, recupera el nombre de usuario.
        isNew: true, // Indica que la vista es para registro de nuevos usuarios.
        csrfToken: request.csrfToken(), // Token de seguridad CSRF para evitar ataques.
    });
};

// Controlador para procesar el formulario de registro de usuario.
exports.post_signup = (request, response, next) => {
    // Crea una nueva instancia del modelo Usuario con los datos del formulario.
    const nuevo_usuario = new Usuario(request.body.username, request.body.password);

    // Guarda el nuevo usuario en la base de datos.
    nuevo_usuario.save().then(() => {
        response.redirect('/users/login'); // Redirige a la página de login después del registro.
    }).catch((error) => {
        console.log(error); // Captura y muestra errores en la consola.
    });
};

// Controlador para mostrar la vista de inicio de sesión.
exports.get_login = (request, response, next) => {
    response.render('login.ejs', { // Renderiza la plantilla 'login.ejs'.
        isLoggedIn: request.session.isLoggedIn || false, // Verifica si el usuario está autenticado.
        username: request.session.username || '', // Recupera el nombre de usuario si está en sesión.
        isNew: false, // Indica que la vista es para iniciar sesión, no para registrarse.
        csrfToken: request.csrfToken(), // Genera un token CSRF para mayor seguridad.
    });
};

// Controlador para procesar el formulario de inicio de sesión.
exports.post_login = (request, response, next) => {
    // Busca el usuario en la base de datos por su nombre de usuario.
    Usuario.fetchOne(request.body.username).then(([rows, fieldData]) => {// Verifica si el usuario existe en la base de datos.
            // Compara la contraseña ingresada con la almacenada (hash).
            bcrypt.compare(request.body.password, rows[0].password)
                .then((doMatch) => { //Aqui tiene la respuesta de si se acepto o no
                    if (doMatch) { // Si las contraseñas coinciden:
                        request.session.username = rows[0].username; // Guarda el usuario en sesión porque Representa el primer usuario encontrado en la base de datos.
                        request.session.isLoggedIn = true; // Marca al usuario como autenticado.
                        return request.session.save(err => { // Guarda la sesión en el servidor.
                            response.redirect('/personajes'); // Redirige a la página de personajes.
                        });
                    } else {
                        response.redirect('/users/login'); // Si no coinciden, redirige al login.
                    }
                }).catch((error) => {
                    console.log(error); // Captura errores en la comparación de contraseñas.
                });
    }).catch((error) => {
        console.log(error); // Captura errores en la consulta a la base de datos.
    });
};

// Controlador para cerrar sesión del usuario.
exports.get_logout = (request, response, next) => {
    request.session.destroy(() => { // Elimina la sesión del usuario.
        response.redirect('/users/login'); // Redirige al login después de cerrar sesión.
    });
};
