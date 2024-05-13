/**
 * Fundamentos da POO - Programação Orientada a Objetos
 * Abstração - Herança - Polimorfismo 
 * @author João Vitor Andrade
 */

// Abstração (Classe Modelo)

class Bloco {
    // Atributos
    constructor(textura, resistencia) {
        this.textura = textura
        this.resistencia = resistencia
    }
    // Ações
    criarBloco() {
        console.log("------------------------------------")
        console.log("┍━━┑")
        console.log("┕━━┙")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }
    construir() {
        console.log(`Bloco de ${this.textura} colocado.`)
    }
    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")
    }
}

/***** MUNDO *****/
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|")
console.log("")

// Instanciando um objeto
const bloco1 = new Bloco("Terra",1)
bloco1.criarBloco()
bloco1.construir()

const bloco2 = new Bloco("Madeira",2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("Pedra",5)
bloco3.criarBloco()
bloco3.minerar()
