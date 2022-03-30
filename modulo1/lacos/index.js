//INTERPRETAÇÃO
/*1. o código repete a ação até o índice 5 da array
a partir do índice 0, até o índice 5, somar o conteúdo da posição ao valor, que inicia no zero.

2. imprime os número maiores que 18
console log = 19, 21, 23, 25, 27, 30

3.
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}


*
**
***
****
a cada linha, adiciona um *
adiciona 1 na quantidade atual
quantidade total = 4
0<4
1<4
2<4
3<4
4
*/




//ESCRITA
//1.
/*
const pets = Number(prompt(`Quantos bichinhos de estimação você tem?`))

if (pets === 0) {
  console.log(`Que pena! Você pode adotar um pet!`)
}
  
const listaPets = []
let i = 0

while(i < pets) {
  const nomePet = prompt(`Qual o nome do seu pet?`)
  listaPets.push(nomePet)
  console.log(listaPets) 
  i ++
}
*/
/*
//2. 
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//a. função que imprima todos os números de arrayOriginal

let imprimeArray = (array) => {
  for(let numero of array) {
    console.log(numero) 
}
}
console.log(`a. imprimir array`)
imprimeArray(arrayOriginal) 

 
//b. imprime cada numero de arrayOriginal dividido por 10

let dividirPorDez = (array) => {
for(let numero of arrayOriginal){
    console.log(numero / 10)
}
}
console.log(`b. cada valor da array dividido por 10`)
dividirPorDez(arrayOriginal)

//c. criar novo array apenas com números pares da array original
let arrayPares = []
let apenasPares = (array, novaArray) => {
for(numero of array){
  if (numero % 2 === 0) {   
    novaArray.push(numero)
  } 
}
console.log(novaArray)
}
console.log(`c. nova array com apenas os números pares`)
apenasPares(arrayOriginal, arrayPares)

//d. novo array com strings "o elemento do índex i é: número"
let arrayString = []
let i = 0
let adicionaString = (array, novoArray) => {
 for(valor of array){
    novoArray.push(`O elemento do índex ${i} é: ${valor}.`)
    i ++
  }
console.log(novoArray)
}
console.log(`d. array com strings`)
adicionaString(arrayOriginal, arrayString) 
*/ 
//e.


/*
let retornaMaximoMinimo = (array) =>{
  let valorMaximo = 0;
  let valorMinimo = Infinity;

  for(let i = 0; i < array.length; i++){
    if (array[i] < valorMinimo) {
      valorMinimo = array[i]
    } else if(array[i] > valorMaximo){
      valorMaximo = array[i]
    }
  }
  console.log(`valor mínimo é ${valorMinimo}`) 
   
  console.log(`valor máximo é ${valorMaximo}`) 
}
  
  retornaMaximoMinimo(arrayOriginal)
*/
  //DESAFIO
  let tentativa = 1
  let escolhaNumero = () => {
    return Math.floor((Math.random() * 10) + 1)}
  console.log(`Vamos jogar!`)

  let chuteNumero
  
  

    while (escolhaNumero !== chuteNumero) {
    let chuteNumero = Number(prompt("Chute um número"))
    console.log(`O número chutado foi ${chuteNumero}`)
  if (escolhaNumero < chuteNumero) {
    console.log(`Errou, seu número é maior do que deveria.`)  
  } else if (escolhaNumero > chuteNumero) {
    console.log(`Errou, seu número é menor.`)
  } else {
    console.log(`Acertou!`)
    console.log(`O número de tentativas foi: ${tentativa} `)
    break;
  }
   tentativa ++ 
  }
  