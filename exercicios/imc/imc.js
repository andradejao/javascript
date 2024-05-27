let peso, altura, idade, genero

function calcularImc() {
    idade = Number(frmImc.txtIdade.value.replace(",", "."))
    genero = Number(frmImc.txtGenero.value.replace(",", "."))
    peso = Number(frmImc.txtPeso.value.replace(",", "."))
    altura = Number(frmImc.txtAltura.value.replace(",", "."))

    let imc = peso / (altura * altura)

    if (idade >= 18)
        if (imc < 18.5) {
            document.getElementById('valorImc').innerText = `Seu IMC é: ${imc.toFixed(1)}`
            document.getElementById('status').src = "./img/underweight.png"
        }
        else if (imc >= 18.5 && imc < 24.9) {
            document.getElementById('valorImc').innerText = `Seu IMC é: ${imc}`
            document.getElementById('status').src = "./img/normal.png"
        }
}
