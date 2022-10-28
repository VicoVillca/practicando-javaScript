class DisposititvoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada( tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca( marca){
        this._marca = marca;
    }
    toString(){
        return "entrada: "+this._tipoEntrada+" - Marca:"+this._marca
    }
}
class Raton extends DisposititvoEntrada{
    static contadorRatones=0;
    constructor(marca){
        super("Raton",marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    toString(){
        return "\n{idRaton:"+this._idRaton+" "+super.toString()+"}";
    }
}

class Teclado extends DisposititvoEntrada{
    static contadorTeclados=0;
    constructor(marca){
        super("Teclado",marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    toString(){
        return "\n{idTeclado:"+this._idTeclado+" "+super.toString()+"}";
    }
}

class Monitor{
    static contadorMonitores=0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca( marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño( tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return "{idMonitor"+this._idMonitor+", marca:"+this.marca+", tamaño:"+this._tamaño+"}";
    }
}

//Creamos computadora
class Computadora{
    static contadorComputadoras=0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this.monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    toString(){
        return (
            "nombre:"+this._nombre+"\n"+
            this._monitor.toString()+
            this._teclado.toString()+
            this._raton.toString()
        );       
    }
}
class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarorden(){
        let c="Orden:"+this._idOrden;
        c+="\n*******************************\n";
        for (const computadora of this._computadoras) {
            c+=computadora;
            c+="\n---------------------------------\n";
        }
        c+="\n*******************************";
        return c;
    }
}

let computadora1 = new Computadora("Computadora 1", new Monitor("LG","16pg"),new Teclado("Lg"), new Raton("sansung"));
let computadora2 = new Computadora("Computadora 2", new Monitor("Patito","32pg"),new Teclado("AVG"), new Raton("Rowel"));
let computadora3 = new Computadora("Computadora 3", new Monitor("Patito","32pg"),new Teclado("AVG"), new Raton("Rowel"));
let computadora4 = new Computadora("Computadora 4", new Monitor("Patito","32pg"),new Teclado("AVG"), new Raton("Rowel"));
let computadora5 = new Computadora("Computadora 5", new Monitor("Patito","32pg"),new Teclado("AVG"), new Raton("Rowel"));
let computadora6 = new Computadora("Computadora 6", new Monitor("Patito","32pg"),new Teclado("AVG"), new Raton("Rowel"));
let orden = new Orden();
orden.agregarComputadora(computadora1);
orden.agregarComputadora(computadora2);
orden.agregarComputadora(computadora3);
orden.agregarComputadora(computadora4);
orden.agregarComputadora(computadora5);
orden.agregarComputadora(computadora6);
console.log(orden.mostrarorden());