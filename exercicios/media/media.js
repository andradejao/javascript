let nota1, nota2, nota3, nota4


function calcular() {
    nota1 = Number(frmMedia.txtNota1.value.replace(",", "."))
    nota2 = Number(frmMedia.txtNota2.value.replace(",", "."))
    nota3 = Number(frmMedia.txtNota3.value.replace(",", "."))
    nota4 = Number(frmMedia.txtNota4.value.replace(",", "."))

    const resultado = (nota1 + nota2 + nota3 + nota4) / 4

    if (frmMedia.txtNota1.value === "") {
        alert("Preencha o valor da nota")
    } else if (frmMedia.txtNota2.value === "") {
        alert("Preencha o valor da nota")
    } else if (frmMedia.txtNota3.value === "") {
        alert("Preencha o valor da nota")
    } else if (frmMedia.txtNota4.value === "") {
        alert("Preencha o valor da nota")
    }else {
        if(resultado < 4 ) {
            document.getElementById('status').src = "./img/reprovado.jpg"
            alert(`A média do aluno é ${resultado}, ele está reprovado!`)
        }else if (resultado >= 7){
            document.getElementById('status').src = "./img/aprovado.png"
            alert(`A média do aluno é ${resultado}, ele está aprovado!`)
        }else {
            document.getElementById('status').src = "./img/recuperacao.webp"
            alert(`A média do aluno é ${resultado}, ele está de recuperação!`)
        }
    }
}