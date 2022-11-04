let promesa = new Promise((resolver,rechazar)=>{
    let valor = true;
    if(valor){
        resolver("resolvemos el problema");
    }else{
        rechazar("No se pudo resolver el problema");
    }
});

promesa
.then(valor => console.log(valor),error => console.log(error))
.catch(ex => console.log(ex))
.finally(() => console.log("Finalizamos"));


promesa
.then(valor =>{
    setTimeout(()=>console.log("Pepillo"),4000)
})
.finally(() => console.log("finalizamos la segunda promesa"));