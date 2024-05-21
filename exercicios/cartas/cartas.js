/**
 * Sorteio de Carta
 * @author João Vitor Andrade
 */

function sortearCarta() {
    //           [0]  [1]  [2]  [3]
    let nipes = ["♦", "♥", "♠", "♣"]
    //           [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [10]  [11] [12]
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    // Sorteio do índice dos vetores
    let nipe = nipes[Math.floor(Math.random() * 4)] // (0 - 3)
    let face = faces[Math.floor(Math.random() * 13)] // (0 - 12)
    // console.log(`${face}${nipe}`)


    // Determinar a cor com base no naipe sorteado antes de exibir a carta
    let cor
    if (nipe === '♥' || nipe === '♦') {
        cor = '#ff0000' // Vermelho
    } else {
        cor = '#000000' // Preto
    }

    // Dar cor as cartas
    document.getElementById('supEsq').style.color = cor
    document.getElementById('infDir').style.color = cor

    // Renderizar(desenhar) a carta
    document.getElementById('supEsq').innerHTML = `<div>${face}</div><div>${nipe}</div>`
    document.getElementById('infDir').innerHTML = `<div>${face}</div><div>${nipe}</div>`

    let centroCarta = document.getElementById('centro')
    if (face === 'J') {
        centroCarta.innerHTML = `<img src ="./img/valete.png">`
    }else if (face === 'Q') {
        centroCarta.innerHTML = `<img src ="./img/dama.png">`
    }else if (face === 'K'){
        centroCarta.innerHTML = `<img src ="./img/rei.png">`
    }else {
        centroCarta.innerHTML = `${nipe}`
        document.getElementById('centro').style.color = cor

    }
}