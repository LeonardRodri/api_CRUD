const express = require('express');

const app = express();

var usuarios =[
  {
    id: 1,
    nome: 'Lenardo',
  },
  {
    id: 2,
    nome: 'Rodrigues',
  },
  {
    id: 3,
    nome: 'João',
  },
  {
    id: 4,
    nome: 'Rodrigo',
  }
]

app.get('/usuarios', (req, res) => {
    return res.send(JSON.stringify(usuarios))
})

app.post('/usuarios', (req, res) => {
  let { usuario4 } = req.body;
  res.send(`Usuario ${usuario4} foi cadastro`)
})

app.listen(3000, ()=> {
  console.log('🔥 Servidor Online 🔥 http://localhost:3000')
})