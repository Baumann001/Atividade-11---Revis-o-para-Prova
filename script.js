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


  /*let i=10

 const intervalo= setInterval(() =>{
    if (i>=0){
        console.log(i);
        i--;
    }else{
        clearInterval(intervalo);
        alert("Lançamento!")
 }
},1000);
*/

function balancoFinanceiroAnual() {
   let totalGanhos = 0;
   let totalGastos = 0;
 
   for (let mes = 1; mes <= 12; mes++) {
     let ganhoMensal = parseFloat(prompt(`Digite o ganho bruto do mês ${mes}:`));
     let gastoMensal = parseFloat(prompt(`Digite o gasto do mês ${mes}:`));
 
     if (isNaN(ganhoMensal) || isNaN(gastoMensal)) {
       alert("Por favor, insira valores numéricos válidos.");
       mes--; // Repete o mês atual
       continue;
     }
 
     totalGanhos += ganhoMensal;
     totalGastos += gastoMensal;
   }
 
   let saldoFinal = totalGanhos - totalGastos;
   let mensagem = `Total de ganhos: R$ ${totalGanhos.toFixed(2)}\n` +
                  `Total de gastos: R$ ${totalGastos.toFixed(2)}\n` +
                  `Saldo final: R$ ${saldoFinal.toFixed(2)}\n`;
 
   if (saldoFinal > 0) {
     mensagem += "A empresa teve lucro no ano.";
   } else if (saldoFinal < 0) {
     mensagem += "A empresa teve prejuízo no ano.";
   } else {
     mensagem += "A empresa não teve lucro nem prejuízo no ano.";
   }
 
   alert(mensagem);
 }
 
 // Chamada da função
 balancoFinanceiroAnual();
 