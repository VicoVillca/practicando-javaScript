function Persona(nombre, apellido, edad){
    this.nombre=nombre;
    this.apellido= apellido;
    this.edad=edad;
    this.nombreCompleto = function(){
        return this.nombre +" "+this.apellido;
    }
}

let p1 = new Persona("Juan", "Marca", 31);
let p2 = new Persona("Marcos", "Mamani", 25);
let p3 = new Persona("Maria", "Arratia", 23);

console.log(p1.nombreCompleto());
console.log(p2.nombreCompleto());
console.log(p3.nombreCompleto());