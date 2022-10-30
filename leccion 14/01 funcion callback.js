function Mostrar(cadena){
    console.log("resultado: "+cadena);
}

function sumar(a,b,func){
    let c = a+b;
    func(c);
}

//sumar(5,8,Mostrar);


function funcionCallBak(s){
    console.log("hola putillos ");
}

setTimeout(()=>{console.log("Holaps sdf")},4000);

setTimeout(function(){console.log("saludo asinc 2")},4000);