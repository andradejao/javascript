/**
 * Estrutura de Dados
 * Objetos
 * @author João Vitor Andrade
 */

const funcionario1 = {}
console.log(typeof funcionario1)

// Adicionar dados à estrutura (CRUD create)
funcionario1.nome = "Mario"
funcionario1.cargo = "Encanador"
funcionario1.email = "mariobros@nintendo.com"
funcionario1.salario = 1000
funcionario1.insta = "@mario"

// Listar os dados da estrutura (CRUD Read)
console.log(funcionario1)
console.table(funcionario1)
console.log(funcionario1.cargo)

// Modificar os dados da estrutura (CRUD Update)
funcionario1.nome = "Luigi"
console.log(funcionario1)

// Excluir os dados da estrutura (CRUD Delete)
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Clark Kent",
    cargo: "Jornalista",
    email: "clarkkent@planetadiario.com",
    salario: 4200
}
console.table(funcionario2)

const endereco1 = {
    logradouro: "Rua Fulano de Tal",
    cidade: "Metrópolis",
    estado: "Delaware"
}
console.table(endereco1)

const funcionario3 = {
    nome: "Geralt de Rívia",
    cargo: "Caçador de Recompensas",
    email: "geraltderivia@kaermorhan.com",
    salario: 1000,
    ...endereco1 // ... spread operator (união de 2 estruturas)
}
console.log(funcionario3)

const funcionario4 = {
    nome: "Vesemir",
    cargo: "Caçador de Recompensas",
    email: "vesemir@kaermorhan.com",
    salario: 2000,
    ...endereco1 // ... spread operator (união de 2 estruturas)
}
console.log(funcionario4)

const funcionario5 = {
    nome: "Steve Rogers",
    cargo: "Capitão",
    email: "steverogers@shield.com",
    salario: 95000,
    escudo: {
        versao: "Original",
        ano: 1940
    },
    defend: () => {
        console.log("🛡️")
    }
}
console.log(funcionario5)
console.log(funcionario5.escudo.versao)
funcionario5.defend() // Executar a função interna da estrutura