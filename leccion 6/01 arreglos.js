//let autos = new Array('Bmw','Mercedes Benz', 'Volvo');

const autos =['Bmw','Mercedes Benz', 'Volvo'];
autos.push('Audi');
console.log(autos);
console.log(autos[1]);
for (let i = 0; i < autos.length; i++) {
    const element = autos[i];
    console.log(element);
}

console.log(autos instanceof Array);

let cadena = "vico";
console.log(typeof cadena);
console.log(cadena instanceof String);
let numero = "1";

console.log(Number.isInteger(Number(numero)));
console.log(typeof numero);
console.log((typeof numero)===Number);