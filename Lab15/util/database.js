// Importa el módulo 'mysql2' que permite interactuar con una base de datos MySQL.
// 'mysql2' es una librería que proporciona métodos para conectarse y ejecutar consultas en MySQL.
const mysql = require('mysql2');

// Crea un pool de conexiones a la base de datos MySQL.
// Un "pool" es un conjunto de conexiones reutilizables que mejoran el rendimiento al evitar
// la sobrecarga de abrir y cerrar conexiones repetidamente.
const pool = mysql.createPool({
    host: 'localhost',       // Especifica la dirección del servidor de la base de datos (en este caso, localhost).
    user: 'root',            // Define el usuario con el que se conectará a la base de datos (en este caso, 'root').
    database: 'personajes',  // Nombre de la base de datos a la que se conectará (en este caso, 'personajes').
    password: 'Jac0b05981.', // Contraseña del usuario para acceder a la base de datos.
});

// Exporta el pool de conexiones, pero con una interfaz basada en promesas.
// Esto permite usar async/await o .then()/.catch() para manejar las consultas de manera asíncrona.
// En lugar de usar callbacks, se pueden usar promesas para un código más limpio y moderno.
module.exports = pool.promise();