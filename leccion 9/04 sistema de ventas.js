class Producto{
    static contadorProdutos = 0;
    constructor(nombre, precio){
        this.nombre= nombre;
        this.precio = precio;
        this.idProducto = ++Producto.contadorProdutos;
    }
    getIdProducto(){
        return this.idProducto;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getPrecio(){
        return this.precio;
    }
    setPrecio(precio){
        this.precio = precio;
    }
    toString(){
        return this.idProducto+ " "+this.nombre +" "+this.precio ;
    }
}


class Orden{
    static contadorOrdenes =0;
    static get MaxProductos(){
        return 5;
    }
    constructor(){
        this.productos = [];
        this.idOrden = ++Orden.contadorOrdenes;
        this.contadorProductosAgregados=0;
    }
    agregarProducto(producto){
        if(this.contadorProductosAgregados<Orden.MaxProductos){
            this.productos.push(producto);
            this.contadorProductosAgregados++;
            console.log("Agregado");
            console.log(producto.toString());
        }else{ 
            console.log("El limite ya esta lleno");
        }
    }

    get calcularTotal(){
        let c=0;
        for (let i = 0; i < this.productos.length; i++) {
            const element = this.productos[i];
            c=c+element.getPrecio();
            console.log(c);
        }
        return c;
    }
    toString(){
        let c = "Orden: "+this.idOrden;
        for (const key in this.productos) {
            if (Object.hasOwnProperty.call(this.productos, key)) {
                const element = this.productos[key];
                c=c+"\n{"+element.toString()+"}";
            }
        }

        return c;
    }
}

let producto = new Producto("arroz",12);
let producto2 = new Producto("Papa",23);

console.log(producto.toString());
console.log(producto2.toString());


let orden = new Orden();
orden.agregarProducto(producto);
orden.agregarProducto(producto2);


console.log(orden.calcularTotal);
console.log(orden.toString());