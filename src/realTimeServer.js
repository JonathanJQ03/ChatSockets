module.exports = (httpServer) => 
    { 
        const {Server} = require('socket.io'); 
        //Que lleve o no cosas dentro del () es el metodo constructor
        //siempre debemos enviar una peticion al server con el metodo httpserver
        const io = new Server(httpServer);
        io.on('connection', socket => { 
            console.log(socket.id);
            socket.on("message",message =>{
                //evento emmit tomar en cuenta para que se usa pero por lo general esto lo configuramos a nuestro gusto
                //grupal todos escuchar pero podemos implementar logica para manejar eso
                console.log(message);
                const cookie = socket.request.headers.cookie;
                const user = cookie.split("=").pop;
                console.log(cookie);
                io.emit("message", 
                    {
                        user: "Javier",
                        message,
                        timestamp: new Date().getTime(),
                    }
                )
                
            })
        });


} 