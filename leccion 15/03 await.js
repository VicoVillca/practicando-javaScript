async function MyPromesa(){
    console.log("Inicio de function");
    let promesa = new Promise(resolver =>{
        setTimeout(()=>{resolver("Retornamos promesa con await")},4000);
        
    });

    console.log(await promesa);

    console.log("Fin de function");
}

MyPromesa();