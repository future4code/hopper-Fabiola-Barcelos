//INTERPRETAÇÃO
//1.
//a) O código solicita um número para o usuário; a função divide o número por 2 e verifica se o resto é igual a zero.
//b) Passou no teste será impresso caso o número inserido seja par.
//c) Não passou no teste será impresso caso o número seja ímpar

//2.
//a) O código é uma lista de preço de frutas que solicita ao usuário o que ele deseja e devolve o preço do item.
//b) O preço da fruta, maçã, é R$ 2.25
//c) se tirar o break, o código não encontra a fruta Pêra e o que é impresso é o default.

//3. a) a primeira linha solicita um número ao usuário, como prompt recebe string, a função number transforma a resposta em número.
//b) 10: mensagem no terminal : Esse número passou no teste;
//-10, não aparecerá nada
//c) haverá erro pq a variável mensagem está dentro do bloco da condicional, não pode ser acessada pelo escopo global pq nhm especificou isso.

//ESCRITA DE CÓDIGO
//1. 
/*let idadeUsuario = Number(prompt("Qual a sua idade?"))
if (idadeUsuario > 18) {
    console.log("Você pode dirigir")
       
}else if (idadeUsuario<18) {
    console.log("Você não pode dirigir")
  
}
*/


/*2
let turnoAluno = prompt("Qual o turno que você estuda? Digite M(matutino), V(verpertino) ou N(noturno).")

if (turnoAluno === "M" || turnoAluno === "m") {
    console.log("Bom dia!")
   } else if (turnoAluno === "V" || turnoAluno === "v"){
console.log("Boa tarde!")
    } else if (turnoAluno === "N" || turnoAluno === "n"){
console.log("Boa noite!")
    } else {
console.log("Erro! Digite M, V ou N.")
    }
*/

/*3
let turnoAluno = prompt("Qual o turno que você estuda? Digite M(matutino), V(verpertino) ou N(noturno).")
turnoAluno.toUpperCase()
switch (turnoAluno.toUpperCase()) {
    case 'M':
        console.log('Bom dia!')
        break;
    case 'V':
        console.log('Boa tarde!')
        break;
    case 'N':
        console.log('Boa noite!')
        break; 

    default:
        console.log('Erro! Por favor, digite M, V ou N.')
        break
}
*/

/*4
//fantasia e ingresso<15
//perguntar qual o gênero do filme, perguntart valor do ingresso

let generoFilme = prompt("Qual gênero de filme você vai assistir?")
let valorIngresso = Number(prompt(`Qual o valor do ingresso?`))
if (generoFilme.toLowerCase() === `fantasia` && valorIngresso <= 15) {
    console.log(`Bom filme!`)
}else {
    console.log(`Escolha outro filme :(`)
} 
*/

//DESAFIO
/*1.
let generoFilme = prompt("Qual gênero de filme você vai assistir?")
let valorIngresso = Number(prompt(`Qual o valor do ingresso?`))

if (generoFilme.toLowerCase() === `fantasia` && valorIngresso <= 15) {
    let lanche = prompt(`Qual snack você vai querer?`)    
    console.log(`Bom filme!`)
    console.log(`Aproveite seu ${lanche}!`) 
}else {
    console.log(`Escolha outro filme :(`)
} 
*/



//2. 
let nomeUsuario = prompt(`Insira seu nome completo`)
let tipoJogo = prompt(`Digite IN para jogo internacional ou DO para jogo doméstico`)
let etapaJogo = prompt(`Semi-final, decisão do terceiro lugar ou final?`)
let categoria = prompt(`Escolha a categoria: 1, 2, 3 ou 4`)
let quantidadeIngressos = Number(prompt(`Quantos ingressos você deseja?`))
console.log(`Dados da compra:`)
console.log(`Nome do cliente: ${nomeUsuario}`)

if (tipoJogo.toLowerCase() === `internacional`) {
    console.log(`Tipo de jogo: internacional`)
} else if (tipoJogo.toLocaleLowerCase() ===  `doméstico`)  {
    console.log(`Tipo de jogo: nacional`)
} else {
    console.log(`Erro! Escolha o tipo de jogo corretamente`)
   } 

   switch (etapaJogo.toLowerCase()) {
       case `semi-final`:
           console.log(`Etapa do jogo: semi-final`)
           break;
        case `final`:
            console.log(`Etapa do jogo: final`)
            break;
        case `terceiro lugar`:
            console.log( `Etapa do jogo: disputa pelo terceiro lugar`)
            break;
       default:
           console.log(`Erro! Insira a etapa do jogo: final, semi-final ou disputa pelo terceiro lugar.`)
           break;
   }

    switch (categoria) {
        case `1`:
            console.log(`Categoria: 1`)
            break;
        case `2`:
            console.log(`Categoria: 2`)
            break; 
        case `3`:
            console.log(`Categoria: 3`)
            break;
        case `4`:
            console.log(`Categoria: 4`)
            break;   
    
        default:
            console.log(`Erro! Insira a categoria corretamente.`)
            break;
    }

    console.log(`Quantidade de ingressos: ${quantidadeIngressos}`)
    console.log(`Valores:`)
/*let sf1 =  

1320
let sf2 = 880
let sf3 = 550
let sf4 = 220
let dt1 = 660
let dt2 = 440
let dt3 = 330
let dt4 = 170
let fi1 = 1980
let fi2 = 1320
let fi3 = 880
let fi4 = 330*/


if (tipoJogo === "doméstico" && etapaJogo === `disputa do terceiro lugar` && categoria === "1") {
    console.log(`Valor do ingresso: R$ 660,00`)
} else if (tipoJogo === "doméstico" && etapaJogo === `disputa do terceiro lugar` && categoria === "2"){
    console.log(`Valor do ingresso: R$ 440,00`)
} else if (tipoJogo === "doméstico" && etapaJogo === `disputa do terceiro lugar` && categoria === "3"){
    console.log(`Valor do ingresso: R$ 330,00`)
} else if (tipoJogo === "doméstico" && etapaJogo === `disputa do terceiro lugar` && categoria === "4"){
    console.log("Valor do ingresso: R$170,00")
} else{
    console.log(`Erro! Confira as informações.`)
}

let semiNacional = tipoJogo === `doméstico` && etapaJogo === `semi-final`
console.log(semiNacional)