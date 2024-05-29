/**
 * Assincronismo
 * Fetch (Promise simplificada)
 * @author João Vitor Andrade
 */

const read = require('readline-sync')
console.clear()
console.log("VIA CEP")
let cep = read.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`

// Apoio ao entendimento da lógica
// console.log(urlAPI)

// Uso de promise para recuperar os dados da API

fetch(urlAPI)
    .then((response) => { // Para obter os dados
        return response.json()
    })
    .then((dados) => { // Para manipular os dados obtidos
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.uf)
    })
    .catch((error) => {
        console.log(`Erro ao obter o endereço: ${error}`)
    })