const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Banco de dados em memória (array)
let users = [
    { id: 1, nome: 'João', idade: 25, email: 'joao@example.com' },
    { id: 2, nome: 'Maria', idade: 30, email: 'maria@example.com' }
];

// Rota GET para listar todos os usuários
app.get('/users', (req, res) => {
    res.json(users);
});

// Rota POST para adicionar um novo usuário
app.post('/users', (req, res) => {
    const { nome, idade, email } = req.body;
    if (!nome || !idade || !email) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        nome,
        idade,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Rota DELETE para excluir um usuário
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    
    users.splice(userIndex, 1);
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
