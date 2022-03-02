// EXERCÍCIOS DE INTERPRETAÇÃO
//1
//a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12 ,13]
// f. 9
//2.
//SUBI NUM ÔNIBUS EM MIRROCOS, 27

// let emailDoUsuario = prompt("Qual o seu e-mail?")
// let nomeDoUsuario = prompt("Qual o seu nome?")
// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso.
// Seja bem-vinda, ${nomeDoUsuario}!`)

//EXERCÍCIO DE ESCRITA DE CÓDIGO
/*1
const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Qual seu e-mail?")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)
*/

/*2
const comidasFavoritas = [
"pizza",
"arroz",
"lasanha",
"feijão",
"bife"]
console.log(comidasFavoritas)
console.log(`Essas são as minhas comidas preferidas:`)
console.log(`${comidasFavoritas[0]},`)
console.log(`${comidasFavoritas[1]},`)
console.log(`${comidasFavoritas[2]},`)
console.log(`${comidasFavoritas[3]} e`)
console.log(`${comidasFavoritas[4]}.`)
const comidaUsuário = prompt("Qual a sua comida favorita?")
comidasFavoritas[1] = comidaUsuário
console.log(comidasFavoritas)*/

/*3
let listaDeTarefas = []
const primeiraTarefa = prompt("Digite uma tarefa")
const segundaTarefa = prompt("Digite outra tarefa")
const terceiraTarefa = prompt("Digite mais uma tarefa")
listaDeTarefas[0] = primeiraTarefa
listaDeTarefas[1] = segundaTarefa
listaDeTarefas[2] = terceiraTarefa
console.log(listaDeTarefas)
const i = prompt("Digite a tarefa o índice da tarefa realizada")
listaDeTarefas.splice(i,1)
console.log(listaDeTarefas)*/

//DESAFIO
/*const frase = prompt("Digite uma frase, por favor")
const array = frase.split(" ")
console.log(array)*/

const listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const abacaxi = listaFrutas.indexOf("Abacaxi")
console.log(`índice de abacaxi: ${abacaxi}, tamanho do array: ${listaFrutas.length}`)
