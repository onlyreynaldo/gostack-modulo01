const express = require('express');

const server = express();
server.use(express.json());

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

server.get('/usuarios', (req, res) => {
   return res.json(usuarios);
});

server.post('/usuarios', (req, res) => {
   const { name } = req.body;
   usuarios.push(name);
   return res.json(usuarios);
});

server.put('/usuarios/:index', (req, res) => {
   const { index } = req.params;
   const { name } = req.body;

   usuarios[index] = name;

   return res.json(usuarios);
});

server.delete('/usuarios/:index', (req, res) => {
   const { index } = req.params;

   usuarios.splice(index, 1);

   return res.send();

});

server.listen(3000);