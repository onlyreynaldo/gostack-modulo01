const express = require('express');

const server = express();

// Query query = ?nome=reynaldo
// Route params = /users/1
// Request body = { "name": "Reynaldo", "email": "onlyreynaldo@icloud.com" }

server.get('/teste', (req, res) => {
   const nombre = req.query.nome;
   return res.json({ message: `Retornando el nombre ${nombre}` });
});

server.get('/users/:id', (req, res) => {
   const id = req.params.id;
   return res.json({ message: `Buscando o usuario ${id}` });
});

// haciendo destructuracion
server.get('/usersres/:id', (req, res) => {
   const { id } = req.params;
   return res.json({ message: `Buscando o usuario ${id} con restructuracion` });
});

const usuarios = ['Diego', 'Claudio', 'Victor'];

server.get('/usuarios/:index', (req, res) => {
   const { index } = req.params;
   return res.json({ message: `Retornando el usuario ${usuarios[index]}` });
});

server.listen(3000);