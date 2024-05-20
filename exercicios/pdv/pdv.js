/**
 * Lógica do PDV
 * @author João Vitor Andrade
 */

let totalCompra, desconto, valorPago, valorFinal

function calcularTotal() {
    totalCompra = Number(frmPdv.txtTotal.value.replace(",", "."))
    desconto = Number(frmPdv.txtPorcentagem.value.replace(",", "."))

    let totalDesconto = (totalCompra * desconto) / 100
    valorFinal = totalCompra - totalDesconto

    frmPdv.txtDesconto.value = `${totalDesconto}`
    frmPdv.txtTotalDesconto.value = `${valorFinal}`
}

function calcularTroco() {
    valorPago = Number(frmPdv.txtValorPago.value.replace(",", "."))
    valorFinal = Number(frmPdv.txtTotalDesconto.value.replace(",", "."))
    let trocoFinal = valorPago - valorFinal

    frmPdv.txtTroco.value = `${trocoFinal}`
}