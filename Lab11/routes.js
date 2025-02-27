const express = require("express");
const router = express.Router();

// Credenciales válidas (deberían almacenarse en una base de datos)
const validUser = 'NEXO@gmail.com';
const validPassword = 'CreandoElMañana';


router.get('/', (req, res) => {
    res.render('agrega_logIn')
});

router.post('/dashboard', (req, res) => {
    const { username, password } = req.body;

    if (username === validUser && password === validPassword) {
        res.render('agregar_dashboard'); 
    } else {
        res.render('agregar_dashboard');
    }
});

router.post('/logout',(req,res)=>{
    res.render('agrega_logOut')
})


router.post('/bulmaPage',(req,res)=>{
    res.render('agrega_bulmaPage');
})


router.post('/pokedex',(req,res)=>{
    res.render('agrega_Pokedex.ejs')
})

router.post('/nexo',(req,res)=>{
    res.render('agrega_htmlPage')
})


router.post('/guardar', (req, res) => {
    const { nombre, correo } = req.body;
    const data = `Nombre: ${nombre}, Correo: ${correo}\n`;

    fs.appendFile('datos.txt', data, () => {
        res.redirect('/'); 
    });
});

module.exports = router;