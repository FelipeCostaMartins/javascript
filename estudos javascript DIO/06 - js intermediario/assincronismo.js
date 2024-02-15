// PROMISSES

// const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
//     const numero = parseInt(Math.random() * 100)
//     resolve(numero)
//     //...
//     reject()
// })

// promessaDeUmNumeroQualquer
//     .then((value) => {
//         console.log(value)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log('finalizou')
//     })

//--------------------------------------------

// ASYNC , AWAIT

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch(error) {
        console.log(error) 
    } finally {
        console.log('finalizou!')
    }
}

buscarArquivo()