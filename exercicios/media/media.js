let nota1, nota2, nota3, nota4

function calcular() {
    nota1 = Number(frmMedia.txtNota1.value.replace(",", "."))
    nota2 = Number(frmMedia.txtNota2.value.replace(",", "."))
    nota3 = Number(frmMedia.txtNota3.value.replace(",", "."))
    nota4 = Number(frmMedia.txtNota4.value.replace(",", "."))
    if (frmFlex.txtNota1.value === "") {
        alert("Preencha o valor do etanol")
        frmFlex.txtEtanol.focus()
    } else if (frmFlex.txtGasolina.value === "") {
        alert("Preencha o valor da gasolina")
        frmFlex.txtGasolina.focus()
}
}