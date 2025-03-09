// Importa la función 'info' del módulo 'console'. 
// Nota: Esto parece innecesario, ya que 'info' no se usa en el código.
const { info } = require('console');

// Importa el modelo 'Personaje' desde el archivo '../models/page.models'.
// Este modelo se usa para interactuar con la base de datos (por ejemplo, guardar y recuperar personajes).
const Personaje = require('../models/page.models');

// Método para manejar la solicitud GET a la ruta de login.
exports.get_logIn = (req, res) => { 
    // Renderiza la vista 'agrega_logIn'.
    res.render('agrega_logIn');
};

// Método para manejar la solicitud POST a la ruta de login.
exports.post_login = (req, res) => {
    // Extrae 'username' y 'password' del cuerpo de la solicitud (req.body).
    const { username, password } = req.body;

    // Establece una cookie llamada 'usuario' con el valor de 'username'.
    // La cookie expira en 15 minutos (900000 ms) y es accesible solo en el servidor (httpOnly: true).
    res.cookie('usuario', username, { maxAge: 900000, httpOnly: true });

    // Redirige al usuario a la ruta '/dashboard'.
    res.redirect('/dashboard');
};

// Método para manejar la solicitud GET a la ruta del dashboard.
exports.get_dashboard = (req, res) => { 
    // Obtiene el valor de la cookie 'usuario'.
    const usuario = req.cookies.usuario;

    // Si la cookie 'usuario' existe, renderiza la vista 'agregar_dashboard' y pasa el nombre de usuario.
    if (usuario) {
        res.render('agregar_dashboard', { username: usuario });
    } else {
        // Si no hay cookie, redirige al usuario a la ruta principal ('/').
        res.redirect('/');
    }
};

// Método para manejar la solicitud GET a la ruta de logout.
exports.get_logOut = (req, res) => { 
    // Elimina la cookie 'usuario'.
    res.clearCookie('usuario');

    // Renderiza la vista 'agrega_logOut'.
    res.render('agrega_logOut');
};

// Método para manejar la solicitud GET a la ruta de la página Bulma.
exports.get_bulmaPage = (req, res) => {
    // Renderiza la vista 'agrega_bulmaPage'.
    res.render('agrega_bulmaPage');
};

// Método para manejar la solicitud GET a la ruta de la Pokédex.
exports.get_Pokedex = (req, res) => {
    // Renderiza la vista 'agrega_Pokedex'.
    res.render('agrega_Pokedex');
};

// Método para manejar la solicitud GET a la ruta de la página HTML.
exports.get_Nexo = (req, res) => { 
    // Renderiza la vista 'agrega_htmlPage'.
    res.render('agrega_htmlPage');  
};

// Método para manejar la solicitud POST a la ruta de guardar datos.
exports.post_guardar = (req, res) => { 
    // Imprime en consola los datos recibidos en el cuerpo de la solicitud.
    console.log("Datos recibidos:", req.body);

    // Crea una nueva instancia de 'Personaje' con el nombre recibido en el cuerpo de la solicitud.
    const dato = new Personaje(req.body.nombre);

    // Guarda el nuevo personaje en la base de datos usando el método 'save' del modelo.
    dato.save()
        .then(() => {
            // Si se guarda correctamente, almacena un mensaje en la sesión.
            req.session.info = `Personaje ${dato.nombre} guardado.`;

            // Redirige al usuario a la ruta '/lista'.
            res.redirect('/lista');
        })
        .catch((error) => {
            // Si hay un error, lo imprime en la consola.
            console.log(error);
        });
};

// Método para manejar la solicitud GET a la ruta de la lista de personajes.
exports.get_lista = (req, res) => { 
    // Obtiene el mensaje almacenado en la sesión (si existe).
    const mensaje = req.session.info;

    // Usa el método estático 'fetchAll' del modelo 'Personaje' para obtener todos los personajes.
    Personaje.fetchAll()
        .then(([rows, fieldData]) => {
            // Imprime en consola los datos obtenidos de la base de datos.
            console.log("Datos en get_lista:", rows);

            // Renderiza la vista 'agregaDatos' y pasa los datos de los personajes y el mensaje.
            res.render('agregaDatos', { datos: rows, info: mensaje });
        })
        // Nota: Falta un bloque '.catch' para manejar errores en la consulta a la base de datos.
};