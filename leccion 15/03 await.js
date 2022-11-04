async function MyFuncion(){
    let promesa = new Promise(resolve => {
        resolve("Promesa con await");
    });
    console.log(await promesa);
}

MyFuncion();