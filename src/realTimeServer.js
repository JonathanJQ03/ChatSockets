module.exports = httpServer => 
    { 
        const { Server, Socket} = require('socket.io'); 
        //Que lleve o no cosas dentro del () es el metodo constructor
        const io = new Server(httpServer);
        io.on('connection', socket => { 
            console.log(socket.id);
        
        });

} 