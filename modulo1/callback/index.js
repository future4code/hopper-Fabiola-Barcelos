// //interpretação

// // const novoArrayA = usuarios.map((item, index, array) => {
// //   console.log(item, index, array);
// // });
// //imprime cada item do array usuarios - comoa array é composta por objetos, imprime os tres objetos
// // serao impressos os nomes de usuarios na array B



// // escrita
// //1.
// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]

// //a
// let nomesPets = pets.map((nomePet) => {
//   return nomePet.nome
// })

// console.log(nomesPets)

// //b
// let salsicha = pets.filter((racaSalsi) => {
//   return racaSalsi.raca === "Salsicha"
// })
// console.log(salsicha)

//c

// let msgPoodle = pets.filter((pood) => {
//   return pood.raca === "Poodle"
// }).map((msg) => {
//   return `Você ganhou um cupom de desconto de 10% para rosar o/a ${msg.nome}.`
// })
// console.log(msgPoodle)

//2. 
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// let nomeItem = produtos.map((nomeProd) => {
//   return nomeProd.nome
// })
// console.log(nomeItem)

//b
let nomeDesconto = produtos.map((produt) => {
  return { nome: produt.nome, preco: (produt.preco * 0.95).toFixed(2)}
})
console.log(nomeDesconto)

//c
let bebidas = produtos.filter((prod) => {
  return prod.categoria === "Bebidas"
})

console.log(bebidas)

//d

let prodYpe = produtos.filter((prod) =>{
  return prod.nome.includes("Ypê")
})

console.log(prodYpe)

//e
let fraseYpe = prodYpe.map((prod) => {
  console.log(`Compre ${prod.nome} por ${prod.preco}.`)
})

console.log(fraseYpe)

//DESAFIO
//1.
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]

let pokeAlfa = pokemons.map((poke) => {
  return poke.nome
}).sort()

console.log(pokeAlfa)

let pokeTipo = pokemons.map((tipoPoke) => {
  return tipoPoke.tipo
})

console.log(pokeTipo)

let tipoSemRepeat = [...new Set(pokeTipo)]
console.log(tipoSemRepeat)
