const express = require('express')
const router = require('./routes/routes')
require('dotenv').config()

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)

const PORTA = process.env.PORT || 3000
app.listen(PORTA, () => {
    console.log(`server rodando na porta ${PORTA}`)
})