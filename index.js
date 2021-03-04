// importando express e engine de templates
const express = require('express')
const pug = require('pug')

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
    const { galao, garrafas } = req.body
    let sobra = 0
    return res.render('resultado', { titulo_pagina, galao, garrafas, sobra })
})

// Execução do app
app.listen(porta, () => {
    console.log(`Aplicação rodando em http://localhost:${porta}`)
})