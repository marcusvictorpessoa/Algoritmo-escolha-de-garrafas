// importando express e engine de templates
const express = require('express')
const pug = require('pug')

// definindo app e porta
const app = express()
const porta = 8023

// configuração da engine de templates
app.set('view engine', 'pug')
app.set('views', 'views')

//rota que retorna a pagina index
app.get('/', (req, res) => {
    return res.render('index')
})

app.post('resultado', (req, res) => {
    return res.render('resultado')
})

//Executa o app
app.listen(porta, () => {
    console.log(`Aplicação rodando em http://localhost:${porta}`)
})