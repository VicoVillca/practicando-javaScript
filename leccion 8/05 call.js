let persona1 ={
    nombre:"Abraham",
    apellido:"Villca",
    nombreCompleto:function(titulo,año){
        return titulo+": "+this.nombre+" "+this.apellido+" "+año;
    }
}

let persona2 = {
    nombre: "Juana",
    apellido:"Arratia"
}

console.log(persona1.nombreCompleto("Sr",2022));

console.log(persona1.nombreCompleto.call(persona2, "Sra",2020));
console.log("HOLA PAPUS");