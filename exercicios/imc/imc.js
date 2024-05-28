/**
 * Calculadora de IMC - JS
 * @author João Vitor Andrade
 */

let peso, altura, idade, genero

function calcularImc() {
    idade = Number(frmImc.txtIdade.value.replace(",", "."))
    genero = String(frmImc.txtGenero.value)
    peso = Number(frmImc.txtPeso.value.replace(",", "."))
    altura = Number(frmImc.txtAltura.value.replace(",", "."))

    let imc = peso / (altura * altura)

    if (idade >= 18)
        if (imc < 18.5) {
            document.getElementById('valorImc').innerText = `Seu IMC é: ${imc.toFixed(1)}`
            document.getElementById('status').src = "./img/underweight.png"
        }
        else if (imc >= 18.5 && imc < 24.9) {
            document.getElementById('valorImc').innerText = `Seu IMC é: ${imc.toFixed(1)}. Peso Normal`
            document.getElementById('status').src = "./img/normal.png"
        } else if (imc >= 25 && imc < 29.9) {
            document.getElementById('valorImc').innerText = `Seu IMC é: ${imc.toFixed(1)}. Acima do Peso`
            document.getElementById('status').src = "./img/overweight.png"
        } else if (imc >= 30 && imc < 34.9) {
            document.getElementById('valorImc').innerText = `Seu IMC é: ${imc.toFixed(1)}. Obesidade`
            document.getElementById('status').src = "./img/obese.png"
        } else {
            document.getElementById('valorImc').innerText = `Seu IMC é: ${imc.toFixed(1)}. Obesidade Extrema`
            document.getElementById('status').src = "./img/extremalyobese.png"
        }
    else {
        document.getElementById('valorImc').innerText = "O cálculo de IMC não é recomendável para pessoas menores de 18 anos"
        document.getElementById('status').src = "./img/default.png"
    }
}

function limpar() {
    document.getElementById('valorImc').innerText = ""
    document.getElementById('status').src = "./img/default.png"
}