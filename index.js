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

// Utilizando middlewares globales.

server.use((req, res, next) => {
   console.time('Request');
   console.log(`Método: ${req.method}; URL: ${req.url}`);

   next();

   console.timeEnd('Request');
});

function checkUserExists(req, res, next) {
   if (!req.body.name) {
      return res.status(400).json({ error: 'User name is required' });
   }

   return next();
}

function checkUserInArray(req, res, next) {
   if (!usuarios[req.params.index]) {
      return res.status(400).json({ error: 'User does not exists' });
   }

   return next();
}

server.get('/usuarios/:index', checkUserInArray, (req, res) => {
   const { index } = req.params;
   return res.json({ message: `Retornando el usuario ${usuarios[index]}` });
});

server.get('/usuarios', (req, res) => {
   return res.json(usuarios);
});

server.post('/usuarios', checkUserExists, (req, res) => {
   const { name } = req.body;
   usuarios.push(name);
   return res.json(usuarios);
});

server.put('/usuarios/:index', checkUserExists, checkUserInArray, (req, res) => {
   const { index } = req.params;
   const { name } = req.body;

   usuarios[index] = name;

   return res.json(usuarios);
});

server.delete('/usuarios/:index', checkUserInArray, (req, res) => {
   const { index } = req.params;

   usuarios.splice(index, 1);

   return res.send();

});

server.listen(3000);