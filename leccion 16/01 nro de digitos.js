let c=0;
let nro = 1122343242;
console.log(typeof nro);
if(typeof nro === "number"){
    while(nro>0){
        c++;
        nro = (nro-(nro%10))/10;
    }
    
    console.log("Nro digitos = "+c);
}else{
    console.log("No es numerico");
}
