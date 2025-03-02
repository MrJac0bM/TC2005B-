const express = require("express");
const router = express.Router();
const path = require('path')
const bodyParser = require('body-parser');
//Declarar variable de Datos 

const datos = [];
router.use(bodyParser.urlencoded({ extended: false }));


router.get('/', (req, res,next) => {
    res.render('agrega_logIn')
    next();
});

router.use('/dashboard', (req, res) => {
    const { username, password } = req.body;

    if (username === validUser && password === validPassword) {
        res.render('agregar_dashboard'); 
    } else {
        res.render('agregar_dashboard');
    }
});

router.use('/logout',(req,res,next)=>{
    res.render('agrega_logOut')
    next();
})


router.use('/bulmaPage',(req,res,next)=>{
    res.render('agrega_bulmaPage');
    next();
})


router.use('/pokedex',(req,res,next)=>{
    res.render('agrega_Pokedex.ejs')
    next();
})

router.use('/nexo',(req,res,next)=>{
    res.render('agrega_htmlPage');
    next();
})


router.post('/guardar', (req, res) => {
    datos.push(req.body.nombre);
    console.log(datos);
    res.render('agregaDatos',{
        datos:datos,
    });

});

router.use(express.static(path.join(__dirname, 'public')));

router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});



module.exports = router;