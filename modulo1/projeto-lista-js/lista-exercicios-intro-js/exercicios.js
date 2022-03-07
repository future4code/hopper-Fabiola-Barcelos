// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  num1: 1
  num2: 2
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  mensagem: "Olá, mundo!"
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  altura: 2
  largura: 6
  const altura = prompt("Digite uma altura")
  const largura = prompt("Digite uma largura")
  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
anoAtual: 2020
anoDeNascimento: 1990
const anoAtual = prompt("Qual o ano atual?")
const anoDeNascimento = prompt("Qual seu ano de nascimento?")
console.log(anoAtual-anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
   peso: 85
  altura: 1.8
    return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
nome: "Alice"
idade: 28
email: "alice@gmail.com"
const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")
const email = prompt("Qual o seu email?")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  cor1: "Azul"
  cor2: "Amarelo"
  cor3: "Vermelho"
  let cor1 = prompt("Digite a primeira cor favorita")
  let cor2 = prompt("Digite a segunda cor favorita")
  let cor3 = prompt("Digite a terceira cor favorita")
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string: "oi"
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
custo: 3000
valorIngresso: 100
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1: "ola"
  string2: "abc"
  return string1.length === string2.length
  }

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array: [1, 2, 3]
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
array: [1, 2, 3, 4, 5]
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
array: ["Laranja", "banana", "maçã"]
// 0 1 2
//CHAMAR FUNÇÕES DOS EXERCÍCIOS 9 E 10
let primeiro = retornaPrimeiroElemento(array)
let último = retornaUltimoElemento(array)
array[0] = último
array[array.length - 1] = primeiro
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}