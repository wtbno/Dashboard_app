const express = require('express')

const routes = express.Router();

const Usuario = require("./controllers/usuarios.controller")
//const Admin = require("./controllers/admin.controller")

routes.get('/', Usuario.index);



routes.post("/api/usuarios",Usuario.create);
routes.get("/api/usuarios", Usuario.index);
routes.get('/api/usuarios.details',Usuario.detalis);
routes.delete("/api/usuarios/:_id",Usuario.delete);
routes.put("/api/usuarios",Usuario.update);

//routes.post("/api/admin",Admin.create);
//routes.get("/api/admin", Admin.index);
//routes.get('/api/admin.details',Admin.detalis);
//routes.delete("/api/admin/:_id",Admin.delete);
//routes.put("/api/admin",Admin.update);

module.exports = routes;