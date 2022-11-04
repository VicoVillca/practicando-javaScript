async function myFuncionPormesa(){
    return "HolaaaPapu";
}


myFuncionPormesa()
.then(valor => console.log(valor))
.finally(()=>console.log("Finalizamos la promesa"));
