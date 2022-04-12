/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {
  // o que fazer se o usuário clicar "ok"
  //COLOCAR A FUNÇÃO

  let carta1Usuario = comprarCarta();
  let carta2Usuario = comprarCarta();
  let totalUsuario = carta1Usuario.valor + carta2Usuario.valor;
  console.log(
    `Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${totalUsuario}`
  );
  let carta1Computador = comprarCarta();
  let carta2Computador = comprarCarta();
  let totalComputador = carta1Computador.valor + carta2Computador.valor;
  console.log(
    `Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação ${totalComputador}`
  );
  if (totalComputador < totalUsuario) {
    console.log("O usuário ganhou!");
  } else if (totalComputador > totalUsuario) {
    console.log("O computador ganhou!");
  } else {
    console.log("Empate!");
  }
} else {
  // o que fazer se o usuário clicar "cancelar"
  console.log("O jogo acabou.");
}

function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
   let notas = (p1*2) + (p2*3) +(ex*1)
   let denominador = 2 + 3 + 1
   let mediaPonderada = notas / denominador
   console.log(mediaPonderada)
  if (mediaPonderada >= 9) {
    consloe.log("A");
  } else if (mediaPonderada < 9 || mediaPonderada >= 7.5) {
    console.log("B");
  } else if (mediaPonderada <= 7.5 || mediaPonderada >= 6) console.log("C");
  else {
    console.log("D");
  }
}


