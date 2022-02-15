/* a. false
b. false
c. true
d. string const bool1 = true

2. o comando prompt devolve strings, é preciso converter para número

3. const soma = Number(primeiroNumero) + Number(segundoNumero)
*/

/*Exercícios
1.  let idadeUsuario = prompt("Qual a sua idade?")
    let idadeMelhorAmiga = prompt("Qual a idade da sua melhor amiga?")
    console.log("Sua idade é maior do que a do seu melhor amigo?") 
    console.log(Number(idadeUsuario) >= Number(idadeMelhorAmiga))
    console.log("Diferença de idade")
    console.log(Number(idadeUsuario) - Number(idadeMelhorAmiga))

2.let numeroPar = prompt("Insira um número par")
console.log("Resto da divisão")
console.log(Number(numeroPar) % 2)
c) O resultado é zero pq não há resto em divisão de números pares por 2.
d) O resultado é 1, pois números ímpares dividiso por 2 têm resto.*/
   

// // // 3.
// let idadeUsuario = prompt("Quantos anos você tem?")
// let idadeMeses = Number(idadeUsuario) * 12
// let idadeDias = Number(idadeMeses) * 365
// let idadeHoras = Number(idadeDias) * 24
// console.log("Idade em meses:", idadeMeses, "Idade em dias:", idadeDias, "Idade em horas:", idadeHoras)

let primeiroNumero = prompt("Digite um número")
let segundoNumero = prompt("Digite outro número")

console.log("O primeiro numero é maior que segundo?"), console.log(Number(primeiroNumero) > Number(segundoNumero)) 
console.log("O primeiro numero é igual ao segundo?"), console.log(Number(primeiroNumero) === Number(segundoNumero))
let divisivel1 = Number(primeiroNumero) % Number(segundoNumero)
let divisivel2 = Number(segundoNumero) % Number(primeiroNumero)

console.log("O primeiro numero é divisível pelo segundo?"), console.log(divisivel1 !== 0)
console.log("O segundo numero é divisível pelo primeiro?"), console.log(divisivel2 !== 0)


