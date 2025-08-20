const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req,res) => {
        res.render("home")
})

app.listen(PORT, (err) =>{
    console.log(`Aplicação rodando em localhost:${PORT}`)
})