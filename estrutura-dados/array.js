/** 
 * Estrutura de Dados
 * Array (Vetor e Matriz)
 * @author João Vitor Andrade
 */

let alunosEM1 = ["Vitor", "Tânia", "Pedro", "Maria", "Viviane", "Sirlene"]
console.log(typeof alunosEM1)

// Determinando o tamanho de um array
console.log(alunosEM1.length)

// Exibindo os dados de um array (CRUD Create)
console.table(alunosEM1)

// Adicionando dados ao array (CRUD Read)
alunosEM1.push("Jorge")
console.log(alunosEM1)

// Alterando dados do array (CRUD Update)
alunosEM1[0] = "Victor"
console.table(alunosEM1)

// Excluindo dados do array
alunosEM1.pop() // Exclui o último dado do array
console.table(alunosEM1)
delete alunosEM1[3] // Exclui um dado específico sem alterar a ordem do índice
console.table(alunosEM1)

// Percorrendo um array
let notas = [3, 8, 5, 9, 2]
console.table(notas)

// Laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// forEach
notas.forEach((n) => {
    console.log(notas[n])
})

// map()
// 1º Exemplo: Adicionar 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)

// 2º Exemplo: Conversão do sistema de pontos para letras
// NA (não atendeu = nota < 5)
// PA (parcial = nota entre 5 e 7)
// A (atendeu = nota > 7)
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return ("NA")
    } else if (nc > 7) {
        return ("A")
    } else {
        return ("PA")
    }
})
console.log(notas)
console.log(notasConvertidas)

// Iniciando um array como um objeto
console.clear()
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.table(alunosEM2)

// Estrutura de dados
let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false

    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false

    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
]
console.table(alunosEM3)

// Filtros
// Ordenar A - Z
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3)

// Ordenar por idade
alunosEM3.sort((x, y) => {
    return (x.idade - y.idade)
})
console.table(alunosEM3)

// ATENÇÃO (criando cópia para exibição)
let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)

// Buscas personalizadas em um array 
//1º Exemplo: Alunos bolsistas
console.log(alunosEM3.filter((b) => {
    return b.bolsista === false
}))

//2º Exemplo: Alunos com idade > 40 anos
console.log(alunosEM3.filter((i) => {
    return i.idade > 40
}))


