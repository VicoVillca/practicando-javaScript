let promesa = new Promise((resolver,rechazar)=>{
    let valor = true;
    if(valor){
        resolver("Se resolvio");
    }else{
        rechazar("no se pudo resolver");
    }
});

promesa
.then(
    valor => {
        setTimeout(()=>console.log(valor),3000)
        
    },
    error => console.log(error)
)
.catch(
    error => console.log(error)
)
.finally(()=> console.log("Finalizar"));