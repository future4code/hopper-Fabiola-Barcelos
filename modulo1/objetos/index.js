/*Exercício 1
a) Matheus Nachtergale, 
Virginia Cavendish, 
canal: "Globo", horario: "14h"
*/

/*Exercício 2
	a) cachorro
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"

    gato
    	nome: "Juba", 
	idade: 3, 
	raca: "SRD"

    tartaruga
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
b) os três pontos(...) copiam um objeto ou array
*/

/* EXERCÍCIO 3
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

a)console.log(minhaFuncao(pessoa, "backender"))
false
console.log(minhaFuncao(pessoa, "altura"))
undefined

b)a função retorna a [propriedade] de determinado objeto
objeto: pessoa
propriedade: backender:false
propriedade "backender" do objeto "pessoa": false

a chave altura não existe no objeto, por isso undefined.
*/


//ESCRITA DE CÓDIGO
/*1.
a)
const pessoa = {
    nome: "Fabíola",
    apelidos: ["Fabi", "Fab", "Fabs"]
}

let retornaFrase = (nome, apelidos) => {
    return console.log(`Eu sou a ${nome}, mas pode me chamar de: ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}.`)

}

retornaFrase(pessoa.nome, pessoa.apelidos)
//b)
const novaPessoa = {
    ...pessoa,
    apelidos: ["Fa", "Fabiu", "Bi"]
}
retornaFrase(novaPessoa.nome, novaPessoa.apelidos)
*/


/*2
/a)
const pessoa = {
	nome: "Bruno", 
  idade: 23, 
	profissão: "Instrutor"
}

const outraPessoa = {
	nome: "Bianca", 
  idade: 34, 
	profissão: "Advogada"
}

let retornaDados = (objeto) => {
    return console.log([objeto.nome, objeto.nome.length, objeto.idade, objeto.profissão, objeto.profissão.length])
}
retornaDados(pessoa)
retornaDados(outraPessoa)
*/

//3
//a)
const carrinho = []
//b)

const fruta1 = {
nome: "uva",
disponível: true
}

const fruta2 = {
nome: "maçã",
disponível: true
}

const fruta3 = {
    nome: "mamão",
    disponível: true
}

let devolveArray = (objeto) => {
    return carrinho.push(objeto)
}

devolveArray(fruta1)
devolveArray(fruta2)
devolveArray(fruta3)
console.log(carrinho)

//DESAFIO