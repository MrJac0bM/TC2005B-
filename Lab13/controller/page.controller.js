const Personaje = require('../models/page.models');

exports.get_logIn = (req, res) => { //Metodos /Get igual no hay cambios relativos 
    res.render('agrega_logIn');
};

exports.get_dashboard = (req, res) => { //Metodos /Get igual no hay cambios relativos 
    const { username, password } = req.body;
    res.render('agregar_dashboard');
};

exports.get_logOut = (req, res) => { //Metodos /Get igual no hay cambios relativos 
    res.render('agrega_logOut');
};

exports.get_bulmaPage = (req, res) => {//Metodos /Get igual no hay cambios relativos 
    res.render('agrega_bulmaPage');
};

exports.get_Pokedex = (req, res) => {//Metodos /Get igual no hay cambios relativos 
    res.render('agrega_Pokedex');
};

exports.get_Nexo = (req, res) => {  //Metodos /Get igual no hay cambios relativos 
    res.render('agrega_htmlPage');  
};

exports.post_guardar = (req, res) => {  //Metodos post desde routes
    console.log("Datos recibidos:", req.body);  //Imrpimos los datos recibidos en consola

    const dato = new Personaje(req.body.nombre); //Creamos nuevo objeto tipo Personaje de la clase Personaje en Models
    dato.save(); //Save los datos guardados 

    console.log("Lista actualizada:", Personaje.fetchAll()); //Regresamos la lista actualizada de los datos

    res.redirect('/lista'); //Redirrecionamos a una nueva pagina con ruta "lista"
};

exports.get_lista = (req, res) => { //Manejamos la nueva ruta creada "Lista"
    const datos = Personaje.fetchAll(); //Variable datos que toma los datos de el fetchAll de el modelo
    console.log("Datos en get_lista:", datos);  //Muestra los datos recopilados de el modelo en este caso los nombres
    res.render('agregaDatos', { datos }); //Renderizamos la pagina con agregadatos.ejs que recibe los datos y los imprime con un ciclo for
};