let hora = ()=>{
    let fecha = new  Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}
setInterval(hora,4000);