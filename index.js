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
    return res.render('index')
})

// rota que retorna pagina de resultado
app.post('/resultado', (req, res) => {
    //console.log(req.body)
    const { galao, garrafas } = req.body
    console.log(`Galão: ${galao} Garrafas ${garrafas}`)
    return res.render('resultado')
})

// Execução do app
app.listen(porta, () => {
    console.log(`Aplicação rodando em http://localhost:${porta}`)
})