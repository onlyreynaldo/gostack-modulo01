## :rocket: Sobre o desafio

Aplicação para armazenar usuarios do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /usuarios`: A rota deve receber `name` dentro do corpo e cadastrar um novo usuario dentro de um array no seguinte formato: `{ name: "reynaldo" }`; 

- `GET /usuarios`: Rota que lista todos os usuarios;

- `PUT /usuarios/:index`: A rota deve alterar apenas o nome com o `index` presente nos parâmetros da rota;

- `DELETE /usuarios/:index`: A rota deve deletar o usuario com o `index` presente nos parâmetros da rota;