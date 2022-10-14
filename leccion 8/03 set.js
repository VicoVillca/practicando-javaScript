// metodo se Set y get

let auto ={
    marca:"MISSAN",
    modelo:"2022",
    precio:7000,
    get marcaPrecio(){
        return this.marca+" "+this.precio;
    },
    set precioAuto(precio){
        this.precio = precio
    } 
}

console.log(auto.marcaPrecio);


auto.precioAuto = 2000;

console.log(auto.marcaPrecio);
