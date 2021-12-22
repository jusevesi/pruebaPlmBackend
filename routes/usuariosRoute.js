const { obtenerUsuarios, agregarUsuarios, actualizarUsuarios, borrarUsuarios } = require("../controllers/UsuariosController")

const usuariosRoute = (app) => {
    app.get("/obtenerUsuarios", obtenerUsuarios)
    app.post("/agregarUsuarios", agregarUsuarios )
    app.put("/actualizarUsuarios", actualizarUsuarios)
    app.delete("/borrarUsuarios", borrarUsuarios)
}

module.exports = {
    usuariosRoute
}