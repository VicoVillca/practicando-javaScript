class Persona{
    static contador =0;
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        Persona.contador++;
        this.idPersona = Persona.contador;
        console.log("Incrementamos contador de persona");
    }
    nombreCompleto(){
        return this.idPersona+" "+this.nombre +" "+this.apellido
    }
}

class Empleado extends Persona{

    constructor(nombre, apellido, sueldo){
        super(nombre, apellido);
        this.sueldo = sueldo;
    }

    descripcionCompleta(){
        return super.nombreCompleto()+" "+this.sueldo
    }
}
let empleado1 = new Empleado("Juan", "Carlos",2344);
let empleado2 = new Empleado("Marcos", "Agani",2344);
let empleado3 = new Empleado("Maria", "Arratia",2344);

console.log(empleado1.descripcionCompleta());
console.log(empleado2.descripcionCompleta());
console.log(empleado3.descripcionCompleta());
console.log(Empleado.contador);


