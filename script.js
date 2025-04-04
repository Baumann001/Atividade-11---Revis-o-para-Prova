 /*function soma (quantidade){
 let total= 0;

 for (let i=0; i<quantidade; i++){
    let valor = parseFloat(prompt(` digite o ${ i +1} número:`));
    total += valor;
 }
 return total;
}

 let quantidade = parseInt(prompt("Quantos números voce quer somar?"));
 let resultado = soma(quantidade);
 alert ("o resultado final é: " +resultado);
*/


 let i=10

 const intervalo= setInterval(() =>{
    if (i>=0){
        console.log(i);
        i--;
    }else{
        clearInterval(intervalo);
        alert("Lançamento!")
 }
},1000);






 