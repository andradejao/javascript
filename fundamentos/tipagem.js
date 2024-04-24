// Tipagem dinâmica: Constantes e Variáveis

console.clear()
console.log("STRINGS _____________________")
let nome = "Andrade"
console.log(nome)
console.log(typeof(nome))
console.log(nome)
console.log(nome.replace("Andrade","João"))

// Concatenação 

console.log("Professor: " + nome)
console.log(`Professor: ${nome}`)

console.log("\n") // Quebrando linha

console.log("NUMBERS _____________________")
let peso = 62
let altura = 1.65
console.log(typeof (peso))
console.log(typeof(altura))
console.log(Number.isInteger (peso))
console.log(Number.isInteger (altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)

console.log("\n") // Quebrando linha

console.log("BOOLEANS _____________________")
let sw = true
console.log(typeof(sw))
console.log(`Chave: ${sw}`)

console.log("\n") // Quebrando linha

// ATENÇÃO!!!
console.log(10 / 0)
console.log("3" + 2) // concatena os valores
console.log("3" - 2) 
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2) // Nan (not a number)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)

