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

    console.log(`${face}${nipe}`)
}