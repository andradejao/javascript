/** 
 *  Fundamentos da POO
 *  Encapsulamento
 *  @author João Vitor Andrade
*/

class User {
    // Atributos
    constructor(login, senha) {
        this.login = login
        // Encapsulamento
        let _senha = senha
        this.getSenha = () => _senha
        this.setSenha = (novaSenha) => _senha = novaSenha
    }
    // Ações(Métodos)
    logar() {
        console.log("______________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === "admin" && this.getSenha() === "123456") {
            console.log("Login Sucesso")
        } else {
            console.log("Login Incorreto")
        }
    }
}

// Sistema
console.clear()
const user1 = new User("admin", "123")
user1.logar()

// Utilizando o método set para setar uma nova senha
user1.setSenha("123456")
user1.logar()
