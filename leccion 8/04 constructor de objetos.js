console.log("asd");
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let persona = new Persona("Juan", "Mamani","juan@gmail.com");

console.log(persona);
let persona2 =  new Persona();
persona2.nombre = "Maria";

console.log(persona2.nombre);