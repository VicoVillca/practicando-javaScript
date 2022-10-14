//funcion get en Objetos

let persona = {
    nombre : "Abraham",
    apellido: "Villca",
    edad:32,
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    },

    get nombreEdad(){
        return this.nombre+" "+this.apellido+" "+this.edad;
    }
}

//metodo 1
console.log(persona.nombreCompleto());
//metodo 1
console.log(persona.nombreEdad);




let auto ={
    marca:"MISSAN",
    modelo:"2022",
    precio:7000,

    marcaModelo: function(){
        return this.marca +" "+this.modelo;
    },

    get marcaPrecio(){
        return this.marca+" "+this.precio;
    }
    
}
//opcion 1
console.log(auto.marcaModelo());

//opcion 2
console.log(auto.marcaPrecio);
















