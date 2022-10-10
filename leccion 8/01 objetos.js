let persona ={
    nombre:"Juan",
    apellido:"Marca",
    email:"juan@gmail.com",
    edad:28,
    nombreCompleto:function(){
        return this.nombre+" "+this.apellido;
    },
    nombreEdad:function(){
        return this.nombre+" "+this.edad;
    }
}



for(propiedades in persona){
    console.log(propiedades);
}

console.log(persona.nombre);

persona.nombre="Maria";
console.log(persona.nombre);

let v = Object.values(persona);
console.log(v);