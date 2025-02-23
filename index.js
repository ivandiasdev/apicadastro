const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Banco de dados em memória (array)
let users = [
    { id: 1, name: 'João', age: 25, email: 'joao@example.com' },
    { id: 2, name: 'Maria', age: 30, email: 'maria@example.com' }
];

// Rota GET para listar todos os usuários
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Rota POST para adicionar um novo usuário
app.post('/api/users', (req, res) => {
    const { name, age, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        age,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
