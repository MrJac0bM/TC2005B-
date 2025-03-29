const db = require('../util/database');

module.exports = class Personaje {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_nivel, mi_imagen) {
        this.nombre = mi_nombre;
        this.id_fuerza = mi_nivel;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO personajes(nombre, id_fuerza, imagen) VALUES (?, ?, ?)', 
            [this.nombre, this.id_fuerza, this.imagen]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute(`
            SELECT * 
            FROM personajes p, fuerza f
            WHERE p.id_fuerza=f.id
            `);
    }

    static fetchOne(id) {
        return db.execute(`
            SELECT * 
            FROM personajes p, fuerza f
            WHERE p.id_fuerza=f.id AND id=?`, 
            [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}