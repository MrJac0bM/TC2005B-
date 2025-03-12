module.exports = (request, response, next) => {
    let canCreate = false;
    for (let privilegio of request.session.privilegios) {
        if (privilegio.nombre == "ver personajes") {
            canCreate = true;
            next();
        }
    }
    if (!canCreate) {
        return response.status(403).send("Tus acciones han sido reportadas a las autoridades");    
    }
};