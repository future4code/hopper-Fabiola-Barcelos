// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function comparaNumeros(a, b) {
    return a - b;
  }
  return array.sort(comparaNumeros);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  function filtraPares(num) {
    return num % 2 === 0;
  }
  return array.filter(filtraPares);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayPares = retornaNumerosPares(array);
  function elevaQuadrado(num) {
    return num ** 2;
  }
  return arrayPares.map(elevaQuadrado);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0;
  let i = 0;
  for (array[i] of array) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero;
  let menorNumero;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
  let diferenca = maiorNumero - menorNumero;

  let objNumeros = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  };
  return objNumeros;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  //declara nova array
  let novaArray = [];
  //para cada valor em i (desde que o indice na nova Array seja menor do que o n), se o i for divisível por 2 sem resto, fazer o push do i na novaArray
  for (let i = 0; novaArray.length < n; i++) {
    if (i % 2 === 0) {
      novaArray.push(i);
    }
  }
  return novaArray;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero";
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 
  let maiorNumero = -Infinity;
  let menorNumero = Infinity;
  let segundoMaior = -Infinity;
  let segundoMenor = Infinity;
  let novoArray = [];
  
  for (let i of array) {
    if (i < menorNumero) {
      menorNumero = i;
    } if (i > maiorNumero) {
      maiorNumero = i;
    }
  }
  for (let i of array) {
    if (i < segundoMenor && i !== menorNumero) {
      segundoMenor = i;
    } if (i > segundoMaior && i !== maiorNumero) {
      segundoMaior = i;
    }
  }
  novoArray.push(segundoMaior);
  novoArray.push(segundoMenor);
  return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  //precisa só tirar os nomes da array - concatenar os nomes
  let atoresConcat = "";
  for (let i = 0; i < filme.atores.length; i++) {
    if (i === filme.atores.length - 1) {
      atoresConcat += filme.atores[i]
    } else {
      atoresConcat += filme.atores[i] + ", ";
      }
  }
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.` 
  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return {
    ...pessoa,
    nome: "ANÔNIMO"
  };
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = []
  for (let pessoa of pessoas) {
    if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
      pessoasAutorizadas.push(pessoa);
  }
  return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = []
  for (let pessoa of pessoas) {
    if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60)
      pessoasNaoAutorizadas.push(pessoa);
  }
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  contas.forEach((conta) => {
    let totalCompras = 0;
    conta.compras.forEach((valor) => {
      totalCompras += valor;
    })
    conta.saldoTotal -= totalCompras;
    conta.compras = []
  })
  return contas
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
    for (let i = 0; i < consultas.length; i++) {
      for (let j = 0; j < consultas.length - i - 1; j++) {
        if (consultas[j].nome > consultas[j + 1].nome) {
          const temp = consultas[j];
          consultas[j] = consultas[j + 1];
          consultas[j + 1] = temp;
        }
      }
    }
    return consultasNome;
  }

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  for (let i = 0; i < consultas.length; i++) {
    for (let j = 0; j < consultas.length - i - 1; j++) {
      const arrayData1 = consultas[j].dataDaConsulta.split("/");
      const dia1 = Number(arrayData1[0]);
      const mes1 = Number(arrayData1[1]);
      const ano1 = Number(arrayData1[2]);

      const arrayData2 = consultas[j + 1].dataDaConsulta.split("/");
      const dia2 = Number(arrayData2[0]);
      const mes2 = Number(arrayData2[1]);
      const ano2 = Number(arrayData2[2]);

      const data1 = new Date(ano1, mes1 - 1, dia1).getTime();
      const data2 = new Date(ano2, mes2 - 1, dia2).getTime();

      if (data1 > data2) {
        const temp = consultas[j];
        consultas[j] = consultas[j + 1];
        consultas[j + 1] = temp;
      }
    }
  }
  return consultas;
}

