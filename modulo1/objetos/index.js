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
// const carrinho = []

//b)

const uva = {
nome: "uva",
disponibilidade: true
}

const maca = {
nome: "maçã",
disponibilidade: true
}

const mamao = {
    nome: "mamão",
    disponibilidade: true
}

let devolveArray = (objeto) => {
    return carrinho.push(objeto)
}

/*devolveArray(fruta1)
devolveArray(fruta2)
devolveArray(fruta3)
console.log(carrinho)*/

let inverteDisponibilidade = (fruta) => {
    return{...fruta, disponibilidade: !fruta.disponibilidade}
}
console.log(inverteDisponibilidade(uva))
console.log(inverteDisponibilidade(inverteDisponibilidade(uva)))

//DESAFIO
//1.
/*
let nomeUsuario = prompt(`Qual o seu nome?`)
let idadeUsuario = Number(prompt(`Qual a sua idade?`))
let profissaoUsuario = prompt(`Qual a sua profissão?`)

let usuario = {
    nome: nomeUsuario,
    idade: idadeUsuario,
    profissão: profissaoUsuario

}
console.log(usuario)
console.log(typeof(usuario))
*/

/*let novaPessoa = () => {
    let pessoa = {
        nome: prompt(`Qual o seu nome?`),
        idade:Number(prompt(`Quantos anos você tem?`)),
        profissão: prompt(`Qual a sua profissão?`)
    }
    console.log(pessoa)
    console.log(typeof(pessoa))
}
novaPessoa()
*/


//2.
/*let filmes = () => {
    let primeiroFilme = {
        título: `Shrek`, 
        ano: 2001
    }
    let segundoFilme = {
        título: `Toy Story`,
        ano: 1995
    }
    console.log(`O primeiro filme foi lançado antes do segundo? ${primeiroFilme.ano < segundoFilme.ano}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${primeiroFilme.ano === segundoFilme.ano}`)

}
filmes()
*/

let comparaAnos = (primeiroFilme, segundoFilme) => {
    console.log(`O primeiro filme foi lançado antes do segundo? ${primeiroFilme.ano < segundoFilme.ano}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${primeiroFilme.ano === segundoFilme.ano}`)
}

let shrek = {
    título: `Shrek`,
    ano: 2001
}

let toyStory = {
    título: `Toy Story`,
    ano: 1995
}

comparaAnos(shrek, toyStory)
