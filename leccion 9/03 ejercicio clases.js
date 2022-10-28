class Persona{
    static contadorPersonas=0;
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        Persona.contadorPersonas++;
        this.idPersona=Persona.contadorPersonas;
    }

    getIdPersona(){
        return this.idPersona;
    }
    getNombre (){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre =nombre;
    }
    getApellido (){
        return this.apellido;
    }
    setApellido(apellido){
        this.apellido =apellido;
    }
    getEdad (){
        return this.edad;
    }
    setEdad(Edad){
        this.edad = edad;
    }

    toString(){
        return this.idPersona+" "+this.nombre+" "+this.apellido+" "+this.edad;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, edad, sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = super.getIdPersona();
        this._sueldo = sueldo;
    }
    getIdEmpleado(){
        return this._idEmpleado;
    }

    getSueldo(){
        return this.sueldo;
    }
    setSueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return this._idEmpleado+" "+super.toString()+" "+this._sueldo;
    }
}

class Cliente extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._idCliente = super.getIdPersona();
        this.fechaRegistro = new Date();
    }
    getIdcliente(){
        return this._idCliente;
    }
    getFechaRegistro(){
        return this.fechaRegistro;
    }
    setFechaRegistro(fechaRegistro){
        this.fechaRegistro = fechaRegistro;
    }
    toString(){
        return this._idCliente+" "+super.toString()+" "+this.fechaRegistro;
    }
}


let empleado = new Empleado("Marcos","Arratia",23,3200);

console.log(empleado.toString());


let cliente = new Cliente("Martin","Marques",32);

console.log(cliente.toString());