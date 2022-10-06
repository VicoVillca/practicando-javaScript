let Sumar = function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a+b;
}

let resultado =Sumar(2,4);
console.log(resultado);

const sumarFuntionTipoFlecha = (a,b)=>{
    console.log("Hola chiquitaaa");    
    return a+b
};

resultado = sumarFuntionTipoFlecha(2,4);
console.log(resultado);

resultado = sumarFuntionTipoFlecha(2,7);
console.log(resultado);


let total =SumaTotal(2,3,4,5,6,7,8,9);
console.log(total);

function SumaTotal(){
    let c=0;
    if(arguments.length>0){
        for (let i = 0; i < arguments.length; i++) {
            c=c+arguments[i];
        }
    }   
    return c;
}

const persona={
    nombre:"juan",
    apellido:"Mmani"
}
function modificamosNombre(p1){
    p1.nombre="Maria";
}
modificamosNombre(persona);

console.log(persona);