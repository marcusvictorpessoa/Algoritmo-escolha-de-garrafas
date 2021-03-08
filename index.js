// importando express e engine de templates
const express = require('express')
const pug = require('pug')
const algoritimo = require('./algoritimo.js')
const  formata_dado = require('./formatadados')
const formata_elementos = require('./formataelementos')
const soma_vetor = require('./somavetor')

// definindo app e porta
const app = express()
const porta = 8023

// configuração da engine de templates
app.set('view engine', 'pug')
app.set('views', 'views')

// configuração da biblioteca de parsing do express
app.use(express.urlencoded({extended: false}))

// rota que retorna a pagina index
app.get('/', (req, res) => {
    const titulo_pagina = "Página inicial"
    return res.render('index',{titulo_pagina})
})

// rota que retorna pagina de resultado
app.post('/resultado', (req, res) => {
    const titulo_pagina = "Resultado"
    let { galao, garrafas } = req.body
    galao = formata_dado(galao)
    garrafas = formata_elementos(garrafas)
    let mensagem
    let soma_garrafas = 0
    soma_garrafas = soma_vetor(garrafas)
    if(galao > 0 && soma_garrafas > 0 && galao <= soma_garrafas){
        let  array = algoritimo(galao, garrafas)
        mensagem = `As garrafas ${array[0]} enchem o galao de ${galao} litros e sobra ${array[1]}`
    }
    else{
        mensagem = "Entrada inválida"
    }
    
    return res.render('resultado', { titulo_pagina, mensagem })
})

// Execução do app
app.listen(porta, () => {
    console.log(`Aplicação rodando em http://localhost:${porta}`)
})