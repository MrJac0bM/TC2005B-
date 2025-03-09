// Importa el módulo de base de datos desde el archivo '../util/database'.
// Este archivo probablemente contiene la configuración de la conexión a la base de datos (como el pool de conexiones).
const db = require('../util/database');

// Define un array vacío llamado 'datos'.
// En este caso, no se está utilizando, pero podría ser usado para almacenar datos en memoria si fuera necesario.
const datos = [];

// Exporta una clase llamada 'Personaje'.
// Esta clase representa un modelo de datos para la tabla 'personajes' en la base de datos.
module.exports = class Personaje {
    // Constructor de la clase Personaje.
    // Recibe un parámetro 'mi_nombre' y lo asigna a la propiedad 'nombre' del objeto.
    constructor(mi_nombre) {
        this.nombre = mi_nombre; // Asigna el valor de 'mi_nombre' a la propiedad 'nombre'.
    }

    // Método 'save' para guardar un personaje en la base de datos.
    // Usa el método 'execute' del módulo 'db' para ejecutar una consulta SQL.
    save() {
        // Ejecuta una consulta SQL para insertar un nuevo registro en la tabla 'personajes'.
        // La consulta usa un marcador de posición (?) para evitar inyecciones SQL.
        // El valor de 'this.nombre' se pasa como parámetro para el marcador de posición.
        return db.execute('INSERT INTO personajes(nombre) VALUES (?)', [this.nombre]);
    }

    // Método estático 'fetchAll' para obtener todos los personajes de la base de datos.
    // Los métodos estáticos no requieren una instancia de la clase para ser llamados.
    static fetchAll() {
        // Ejecuta una consulta SQL para seleccionar todos los registros de la tabla 'personajes'.
        return db.execute('SELECT * FROM personajes');
    }
};