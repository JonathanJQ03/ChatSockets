//crear sockets de comunicación
const socket = io();//permite conectar,desconectar,reiniciar la conexión

const send = document.querySelector("#send-message");
const allMessage = document.querySelector("#all-messages");

send.addEventListener("click",() =>{
    const message = document.querySelector("#message");
    //Los eventos se dan en base a una fecha nuestra "message" es el nombre de mi evento
    //Socket io es programacion orientada a eventos
    //al dar click realizamos el evento y emitimos el mensaje,
    
    //evento - valor eventos
    //emit: ya sabe quien puede comunicarse
    socket.emit("message",message.value);
    message.value="";
    
    
});

socket.on("message", ({ user, message }) => {
    const timestamp = new Date().toLocaleTimeString([], { 
        hour: "2-digit", 
        minute: "2-digit" 
    });
    
    const msg = document.createRange().createContextualFragment(`
        <div class="message">
            <div class="image-container">
                <img src="/img/Javier.jpeg" alt="Foto de Perfil">
            </div>
            <div class="message-body">
                <div class="user-info">
                    <span class="username">${user}</span>
                    <span class="timestamp">${timestamp}</span>
                </div>
                <p>${message}</p>
            </div>
        </div>
    `);

    allMessage.append(msg);
});