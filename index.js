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

app.post('/usuarios', (request, response) => {
  let body = '';

  request.on('data', (chunk) => {
    body += chunk
  });

  request.on('end', () => {
    body = JSON.parse(body)
    const lastUser = usuarios[usuarios.length - 1].id
    const newUser = {
    id: lastUser + 1,
    name: body.name,
  }
  usuarios.push(newUser)
  response.send(200, newUser)
  })
})

app.listen(3000, ()=> {
  console.log('🔥 Servidor Online 🔥 http://localhost:3000')
})