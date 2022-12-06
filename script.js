// Contextualização do desafio:
// As Ilhas Growdev formam um reino independente nos mares do Pacífico.
// Como é um reino recente, a sociedade é muito influenciada pela
// informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00,
// GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na
// programação dos caixas automáticos de um grande banco das Ilhas
// Growdevs.

// Tarefa:
// Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de notas 
// disponíveis, mantendo um estoque de cédulas para cada valor. Os clientes do 
// banco utilizam os caixas eletrônicos para efetuar retiradas de um certo número 
// inteiro de GrowCoins. Sua tarefa é escrever um algoritmo que, dado o valor de 
// GrowCoins desejado pelo cliente, determine o número de cada uma das notas 
// necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja 
// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota
// de GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

// Exemplo de entrada:
// 72
// Exemplo de saída:
// GC$ 50,00 -> 1
// GC$ 10,00 -> 2
// GC$ 5,00 -> 0
// GC$ 1,00 -> 2


let saque = entrada  = prompt('Informe o valor de GC$ para saque (Apenas números inteiros): ');

let contador50 = 0;
let contador10 = 0;
let contador5 = 0;
let contador1 = 0;


if(saque != 0) {

while (saque >= 50) {
    contador50++;
    saque -= 50;
}

while (saque >= 10) {
    contador10++;
    saque -= 10;
}

while (saque >= 10) {
    contador5++;
    saque -= 5;
}

while (saque >= 1) {
    contador1++;
    saque -= 1;
}

}
let total = (contador50*50+contador10*10+contador5*5+contador1*1);
let resto = entrada - total;

if(contador50 > 0){
    document.write("A quantidade de notas de GC$50 é: " + contador50 + '<br />');
} 
if(contador10 > 0){
    document.write("A quantidade de notas de GC$10 é: " + contador10 +'<br />');
}
if(contador5 > 0){
    document.write("A quantidade de notas de GC$5 é: " + contador5 +'<br />');  
}
if(contador1 > 0){
    document.write("A quantidade de notas de GC$1 é: " + contador1 +'<br />');
}



// OUTRA RESOLUÇÃO

// const saque = prompt('Informe o valor de GC$ para saque (Apenas números inteiros): ');
// let valor = parseInt(saque);
// const notas = [50, 10, 5, 1];

// for (let nota of notas) {
//     let qtdNotas = parseInt(valor / nota);
//     if(qtdNotas > 0){ 
//       document.write('Notas de GC$ \n' +(nota)+',00 - ' +'<br />' + 'Número necessário de notas: ' + qtdNotas+ '<br />' + '<br />');
//       valor = valor % nota;
//   }}