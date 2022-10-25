class Persona {
    static contador =0;
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido = apellido;
    }
    NombreCompleto(){
        return this.nombre+" "+this.apellido;
    }
    static mostrar(){
        return "Holap";
    }
    static mostrar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,sueldo){
        super(nombre,apellido);
        this.sueldo = sueldo;
        Persona.contador++;
        console.log("Se incrementa el contador en 1");
    }
    NombreCompleto(){
        return super.NombreCompleto()+" "+this.sueldo;
    }
}

let empleado = new Empleado("Grabiel","Marquez",2342);
let empleado2 = new Empleado("Grabiel","Marquez",2342);
let empleado3 = new Empleado("Grabiel","Marquez",2342);
empleado.nombre = "Marcelo";
console.log(empleado.NombreCompleto());



console.log(Empleado.contador);