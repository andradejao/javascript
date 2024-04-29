/**
 * Regra de 3
 */

// Importação da biblioteca
const read = require('readline-sync')

// Declaração de variáveis
let x, y, valor

console.clear()
console.log("Regra de 3")
console.log("X% de Y = valor")

// entrada de dados
x = read.question("Digite o valor de porcentagem: ")
y = read.question("Digite o valor total: ")

// processamento
valor = (x * y) / 100

// saída
console.log(`${x}% de ${y} é ${valor.toFixed(2)}`)