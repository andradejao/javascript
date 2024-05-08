let cambio, quantidade


function calcular() {
    cambio = Number(frmDolar.txtCambio.value.replace(",", "."))
    quantidade = Number(frmDolar.txtDolar.value.replace(",", "."))

    const resultado = cambio * quantidade

    if (frmDolar.txtCambio.value === "") {
        alert("Preencha o valor do câmbio")
        frmDolar.txtCambio.focus()
    } else if (frmDolar.txtDolar.value === "") {
        alert("Preencha o valor da quantidade")
        frmDolar.txtDolar.focus()
    } else {
        frmDolar.txtValor.value = `${resultado}`
    }
}