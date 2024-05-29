/**
 * Assincronismo
 * Promises
 * @author João Vitor Andrade
 */

const read = require('readline-sync')

// Simulação do database utilizando uma estrutura de dados

const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    aluno: {
        usuario: "João Vitor Andrade",
        senha: "123456"
    }
}

// Autenticação de Usuário

console.clear()
console.log("____________________________________")
console.log("USUÁRIO")
console.log("____________________________________")

// Entrada de dados (captura de login e senha)

let login = read.question("login: ")
let senha = read.question("senha: ")
console.log("____________________________________")

// Executando uma função assíncrona com uso de promise
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(`Erro de autenticação. ${error}`)
    })

// Função logar (autenticação do usuário)

function logar() {
    // uso de promise para trabalhar a requisição ao database
    // de forma assíncrona

    return new Promise((resolve, reject) => {
        // uso do timeout para simular atraso na requisição
        setTimeout(() => {
            // Lógica para autenticação
            // O primeiro if verifica se existe o login
            if (database.hasOwnProperty(login)) {
                // O segundo if verifica se a senha está correta 
                if (database[login].senha === senha) {
                    resolve(`Autenticação realizada. Olá, ${database[login].usuario}`)
                } else {
                    reject("Senha Incorreta. Tente novamente.")
                }
            } else {
                reject("Usuário não encontrado. Verifique o login.")
            }
        }, 2000)
    })
}
