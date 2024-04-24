/**
 * APP Flex
 * @author João Vitor Andrade
 */

let gasolina, etanol

function calcular() {
    etanol = Number(frmFlex.txtEtanol.value.replace(",", "."))
    gasolina = Number(frmFlex.txtGasolina.value.replace(",", "."))
    // Validação de campos obrigatórios
    if (frmFlex.txtEtanol.value === "") {
        alert("Preencha o valor do etanol")
        frmFlex.txtEtanol.focus()
    } else if (frmFlex.txtGasolina.value === "") {
        alert("Preencha o valor da gasolina")
        frmFlex.txtGasolina.focus()
    } else {
        // console.log(etanol)
        // console.log(gasolina)
        if (etanol < 0.7 * gasolina) {
            document.getElementById('status').src = "./img/etanol.png"

        } else {
            document.getElementById('status').src = "./img/gasolina.png"
        }
    }
}

function limpar() {
    document.getElementById('status').src = "./img/flex.png"
}