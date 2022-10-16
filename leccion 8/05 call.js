let persona ={
    nombre:"Abraham",
    apellido:"Villca",
    nombreCompleto:function(rol,año){
        return rol+": "+this.nombre+" "+this.apellido+":"+año
    }
}
let persona2 ={
    nombre:"Maria",
    apellido:"Martines"
}

console.log(persona.nombreCompleto("Sr",2022));

console.log(persona.nombreCompleto.call(persona2,"Sra",2000));