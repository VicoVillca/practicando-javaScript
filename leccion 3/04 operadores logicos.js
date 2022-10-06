let a=11;
let valMin=0;
let valMax=10;

if(a>=valMin && a<=valMax){
    console.log("Dentro del rango");
}else{
    console.log("Fuera del rango");
}
let miNumero = "18x";
let edad = Number(miNumero);
if(isNaN(edad)){
    console.log("No es un numero");
}else{
    console.log((edad>=18)?"puedde Votar":"muy joven");
}

