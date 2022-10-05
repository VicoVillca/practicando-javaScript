/**
 * Ejemplosde tipos de datos
 */

//tipso de datos String
 nombre = "Abraham Villca alarcon";


console.log(nombre);

nombre = 123;

console.log(typeof(nombre));
//tipo de dato numerico
var numero = 123;

console.log(numero);

//tipo de datos Object

var objeto ={
    nombre:"juan",
    apellido:"mamani",
    telefono:75221325,
    genero:null
};
console.log(typeof(objeto.genero));
console.log(typeof(objeto));

//tipos de datos boleanos
var bandera =false;

console.log(bandera);
console.log(typeof(bandera));
//typo de dato funcion

function myFuncion(){}
console.log(myFuncion);
console.log(typeof(myFuncion));

//tipo de variable Symbol

var simbolo = Symbol("holap");

console.log(simbolo);

console.log(typeof(simbolo));
//tipo clase

class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
//tipode Udefined
var indef;

console.log(indef);
console.log(typeof indef);
// null= ausencia de valor

var variable = null;
console.log(variable);
console.log(typeof variable);

//arreglos
var autos =["BMW","AUDI","VOLVO"];

console.log(autos);
console.log(typeof autos);
//cadenas vacias

var z= '';
console.log(z);
console.log(typeof z)