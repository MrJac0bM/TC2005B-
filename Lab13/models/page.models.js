const datos = [];

module.exports = class Personaje {
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    save() {
        datos.push(this);
    }

    static fetchAll() {
        return datos;
    }
};