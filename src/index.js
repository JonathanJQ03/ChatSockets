const express =  require("express");
const { createServer } = require('http');
//Require de mi servidor en tiempo real
const realTimeServer = require("./realTimeServer");
const path = require('path');
//el path es el src
const app = express();
const httpServer =  createServer(app);


//asignar un puerto a la app el puerto por defecto de node es 3000
//Debemos crear un archivo con las variables de entorno pero por el momento queda asi
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
//La ruta seria: /Software/SistemasDistribuidos/ChatSockets/src/views

//Necesitamos las rutas: Archivos en los cuales vamos a realizar las respectivas consultas

app.use(requiere('./routes')); //No es necesario poner el index,js pq ya por defecto se sobreentiende que se usa ese archivo index
//nuestro index dentro de routes es qn gestiona toda la parte de rutas

//Rutas publicas: Creadas para procesos que necesitan usar el usuario 
//Rutas privadas: Acceso a recursos en especifico y acorde el rol

app.use(express.static(path.join(__dirname,'public')));

//Levantar el servidor y hacer que la app escuche por un puerte
httpServer.listen( app.get('port'),() => { 
    console.log('La aplicación esta corriendo en el puerto', app.get('port'));
});

realTimeServer(httpServer);