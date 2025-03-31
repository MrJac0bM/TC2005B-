const db = require('../util/database');

module.exports = class Fuerza {

    constructor(mi_nivel) {
        this.nivel = mi_nivel;
    }

    save() {
        return db.execute('INSERT INTO fuerza(nivel) VALUES (?)', [this.nivel]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM fuerza');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM fuerza WHERE id=?', [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}