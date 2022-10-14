console.log("asd");
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido;
    }
}

let persona = new Persona("Juan", "Mamani","juan@gmail.com");

console.log(persona);
let persona2 =  new Persona();
persona2.nombre = "Maria";
persona2.apellido = "Magali";

console.log(persona2.nombre);


console.log(persona.nombreCompleto());

console.log(persona2.nombreCompleto());