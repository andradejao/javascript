/*
    Estudo das Funções com sintaxe moderna
    @author João Andrade
*/

console.clear()

function hello() {
    console.log("Hello World")
}
hello()
console.log(typeof hello)

// Função Anônima (atribuída)
const hello2 = function () {
    console.log("Hello Function assigned")
}
hello2()
console.log(typeof hello2)

// Função Anônima Simplificada (Arrow Function)
const hello3 = () => {
    console.log("Hello Arrow assigned")
}

hello3()
console.log(typeof hello3)

// Função Anônima Super Simplificada (Arrow Function)
const hello4 = _=> console.log("Hello Arrow Function Assigned Simplified")
hello4()
console.log(typeof hello4)

// Função Simples com Retorno
function somarS(num1,num2){
    return console.log(num1 + num2)
}
somarS(2,3)
console.log(typeof somarS)

// Função Anônima com Retorno
let somarA = function(num1,num2){
    return console.log(num1 + num2)
}
somarA(2,3)
console.log(typeof somarA)

// Função Anônima Simplified (arrow function) com Retorno
let somarAF = (num1,num2) => {
    return console.log(num1 + num2)
}
somarAF(2,3)
console.log(typeof somarAF)

// Função Anônima Super Simplified (arrow function) com Retorno
let somarAFS = (num1,num2) => console.log(num1 + num2)

somarAF(2,3)
console.log(typeof somarAF)

