"use strict"
try{
    myFuntion();
    throw "mi error";
}catch(error){
    console.log(error);
}finally{
    console.log("Finaliza el porcedimiento");
}


function myFuntion(){
    console.log("Hola chiquita");
}






let resultado= -1;

try{
    if(isNaN(resultado)) throw "no es numero";
    else if(resultado === '') throw "es cadena vacia";
    else if(resultado>0) throw "Valor positivo"
    else if (resultado<0) throw "Valor negativo";
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Finalizamos revicioon de errores");
}