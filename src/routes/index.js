//Crear un pool de rutas para acceder al index y el index es qn proporciona la ruta que necesito.
//ESte archivo es qn esta centralizado
const express = require("express");
const router = express.Router();
const path = require("path"); //Toma directorio la carpeta raiz de la ruta
const isLoggedIn = require('../middleware/isLoggedIn')

//directorio para todas las vistas
const views = path.join(__dirname,"/../views"); //dirname: nombre del directorio, ojo con las rutas
//Que deseo obtener de esta ruta
router.get("/", isLoggedIn, (req,res) => {
    res.sendFile(views + "/index.html")
});

router.get("/register", (req,res) => {
    res.sendFile(views + "/register.html")
});

module.exports= router;
//middleware van antes de la request como por ejemplo apra validacion
//ejecutaods entre el request y el response