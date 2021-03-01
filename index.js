const express = require('express')
const path = require('path')
const servidor = express()
const porta = 8023

//rota e função de callback que retorna 
servidor.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname + '/index.html'))
})

//Executa o servidor
servidor.listen(porta, () => {
    console.log(`Aplicação rodando em http://localhost:${porta}`)
})