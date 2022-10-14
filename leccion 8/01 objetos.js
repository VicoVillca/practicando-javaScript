//imprimir objetos en js
let persona={
    nombre:"Abraham",
    apellido:"Villca",
    edad:32
}
//Opcion 1

console.log(persona);
//opcion 2
for(elem in persona){
    console.log(elem);
}

//opcion 3
let v = Object.values(persona);
console.log(v);

//opcion 4
let stringPersona = JSON.stringify(persona);

console.log(stringPersona);