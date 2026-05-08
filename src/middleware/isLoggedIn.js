//Para exportar un middlewar necesito los dos primeros argemntos y el next es apra saber q accion se va ahcer despues de ejecutar esa accion
//Midleware se ejecuta antes de la request vcerifica si tengo una cookie con nombre del chat para enviarlo directo al chat
module.exports = (req,res,next) =>{
 if(req.cookies.username){
    next();
 }else{
    res,redirect("/register");
 }
}