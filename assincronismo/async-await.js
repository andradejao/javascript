/** 
 * Assincronismo
 * async - await
 * @author João Vitor Andrade
 */

// Importar biblioteca nativa(js) para trabalhar com manipulação
// de arquivos (fs - fyle system)

const fs = require('fs')

// função para criar um arquivo
async function criarArquivo() {
    let conteudo = "João Vitor Andrade \n Exemplo de uso dos recursos async - await"
    await gravarArquivo('teste.txt', conteudo)
}

//  Função para gravar um arquivo 
async function gravarArquivo(local, conteudo) {
    try {
        await fs.promises.writeFile(local, conteudo)
        console.log("Arquivo criado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

criarArquivo()