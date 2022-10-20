class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    set Nombre(nombre){
        this.nombre= nombre;
    }
    get Nombre(){
        return this.nombre;
    }

    set Apellido(apellido){
        this.apellido = apellido;
    }
    get Apellido(){
        return this.apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, sueldo){
        super(nombre,apellido);
        this.sueldo = sueldo;
    }

    get Sueldo(){
        return this.sueldo;
    }
    set Sueldo(sueldo){
        this.sueldo = sueldo;
    }
}

let empleado = new Empleado("Marcos","Mamani",5500);
empleado.Apellido = "Marca";
console.log(empleado);