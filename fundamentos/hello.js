/** 
 * Fundamentos Sintaxe Básica da Linguagem
*/

// importação de pacotes
const colors = require('colors')

// Sentenças
console.log ("Hello World!".red)
console.log ('Hello World!')

// Blocos
{
    console.log("Hello Java Script")
}

// Omissão de chaves em estruturas de controles
let media = 7
if (media >= 5)
    console.log("APROVADO")
else 
    console.log("REPROVADO")

for(let x = 1; x <= 10; x++)
    console.log(x)
