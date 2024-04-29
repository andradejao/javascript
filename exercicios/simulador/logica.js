/**
 * JS - Simulador de Operadores Lógicos
 * @author João Vitor Andrade
 */

let valor // valor recebido 1:acender 2: apagar 3:quebrar
let quebrada = false // estado da lâmpada

function simular(valor) {
    // Quebrar a lâmpada
    if(valor === 3){
        let beep = new Audio()
        beep.src = "./sound/glassbreak.wav"
        beep.play()
        document.getElementById("lamp").src = "./img/broken.jpg"
        quebrada = true
        
    }

}