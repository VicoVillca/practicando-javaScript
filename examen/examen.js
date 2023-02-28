https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {
  const valor = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
    const respuesta =[];
    let total=0;
    for(let i=0;i<cid.length;i++){
      total=total+cid[i][1];
    }
    //lo que tenemso que dar
    let cambio =cash-price;
    //lo que hay en la caja
    total=total.toFixed(2);
    console.log(total);
    console.log(cambio);
    if(cambio>total){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }else{
      if(cambio.toFixed(2)===total){
        return { status: "CLOSED", change: cid };
      }else{
        cid = cid.reverse();
        console.log(cid);
        for (let elem of cid) {
          let temp = [elem[0], 0];
          
          while (cambio >= valor[elem[0]] && elem[1] > 0) {
            temp[1] += valor[elem[0]];
            elem[1] -= valor[elem[0]];
            cambio -= valor[elem[0]];
            
            cambio = cambio.toFixed(2);
          }
          console.log(temp);
          if (temp[1] > 0) {
            respuesta.push(temp);
          }
        }
      }
      console.log(cambio);
      if (cambio > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
      return { status: "OPEN", change: respuesta};
    }
  }
  
  console.log(
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  );
  //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
  //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}