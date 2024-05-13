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

// Herança (Subclasse da classe Modelo)
class Enxada extends Bloco {
    // Atributos
    constructor(textura, resistencia, conquista) {
        super(textura, resistencia)
        this.conquista = conquista
    }
    // Ações
    criarEnxada() {
        console.log("------------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }
    arar() {
        console.log("._._._. Terra Arada!")
        if (this.conquista === true) {
            console.log("* Conquista Obtida!")
        }
    }

    // Polimorfismo (Sobreescrever o método existente da classe pai)
    minerar() {
        console.log("♰ Dano Atribuído!")
    }
}

/***** MUNDO *****/
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|")

// Instanciando um objeto
const bloco1 = new Bloco("Terra", 1)
bloco1.criarBloco()
bloco1.construir()

const bloco2 = new Bloco("Madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("Pedra", 5)
bloco3.criarBloco()
bloco3.minerar()

const enxada1 = new Enxada("Madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("Ferro", 5, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("Diamante", 10, false)
enxada3.criarEnxada()
enxada3.minerar()
