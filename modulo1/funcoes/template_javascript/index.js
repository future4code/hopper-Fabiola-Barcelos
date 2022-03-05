//INTERPRETAÇÃO
/*1
function minhaFuncao(variavel) {
    return variavel * 5
}
a) 10 e 50
b) não apareceria nada*/

/*2
a) a função retorna todos a frase inserida pelo usuário com todas as letras minúsculas
respondendo true ou false se a frase tiver a palavra "cenoura".
b) i. eu gosto de cenoura; true
ii. cenoura é bom pra vista; true
iii. cenouras crescem na terra; true
*/

//ESCRITA DE CÓDIGO
/*1
a.
const nome = "Fabíola"
const idade = 32
const cidade = "Porto Alegre"
const profissao =  "estudante"

function exercicio1() {
    console.log(`Sou a ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}.`)
}
exercicio1()

b.
function novaFrase (nome, idade, cidade, profissão){
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissão}.`)
}
novaFrase("Fabíola", 32, "Porto Alegre", "estudante")
*/

/*2
a.
let somaDoisNumeros = (numero1, numero2) => {
return numero1 + numero2
}
console.log(somaDoisNumeros(2, 5))
*/
//ou

/*let doisNumeros = (num1, num2) =>{
    return num1 + num2
}
const resultado = doisNumeros(3,6)
console.log(`a. ${resultado}`)
*/

/*b. 
let maiorOuIgual = (num3, num4) => {
return num3>=num4
}

let resultadoMaiorouIgual = maiorOuIgual(65,68)
console.log(`b. ${resultadoMaiorouIgual}`)
*/

/*c.
let parImpar = (num4) => {
    return num4 % 2 === 0
}

let resultadoParImpar = parImpar(8)
console.log(`c.`, resultadoParImpar)
*/

/*d.

let recebeFrase = (texto) => {
    return texto.length, texto.toUpperCase()
}
let fraseAlterada = recebeFrase(`Essa é uma frase`)
console.log(fraseAlterada)
console.log(`d.`, recebeFrase(`essa é outra frase`))
*/


/*3
const numeroA = Number(prompt("Digite um número"))
const numeroB = Number(prompt("Digite outro número"))

let soma = (num1, num2) => {
    return num1 + num2
}

let subtração = (num1, num2) => {
    return num1 - num2
}

let multiplicação = (num1, num2) => {
    return num1 * num2
}

let divisão = (num1, num2) => {
    return num1 / num2
}

console.log(`soma:`, soma(numeroA, numeroB), `subtração:`, subtração(numeroA, numeroB), `multiplicação:`, multiplicação(numeroA, numeroB), `divisão:`, divisão(numeroA, numeroB))
*/

//DESAFIO
//a.
let recebeParametro = (texto) =>{
    return console.log(texto)
}
recebeParametro("esta é uma frase")

//b.
let nenhumReturn = (num1, num2) => {
   const soma = num1 + num2
   console.log(soma)
}
nenhumReturn(2,7)

//2.
let pitagoras = (b, c) =>{
  let catetob = b**2
  let catetoc = c**2
  let hipotenusa =  (catetob + catetoc) ** (1/2)
    return hipotenusa
}
console.log(`hipotenusa=`, pitagoras(7, 24))
