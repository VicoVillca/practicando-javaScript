class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo= sueldo;
    }
    obtenerDetalles(){
        return "Empleado: nombre: "+this.nombre+", sueldo: "+this.sueldo;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return "Gerente: "+super.obtenerDetalles()+", depto:"+this.departamento;
    }
}

let gerente = new Gerente("Juan", 20000, "Sistemas");
console.log(gerente.obtenerDetalles());