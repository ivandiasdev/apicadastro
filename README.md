
# API de Usuários

Esta é uma API simples desenvolvida com Express.js que permite gerenciar um conjunto de usuários. A API suporta operações de listagem, criação e exclusão de usuários.

## Tecnologias Usadas

- Node.js
- Express.js
- CORS

## Endpoints

### 1. Listar Todos os Usuários

- **Método:** `GET`
- **Endpoint:** `/users`
- **Descrição:** Retorna uma lista de todos os usuários.

**Exemplo de Resposta:**
```json
[
    { "id": 1, "nome": "João", "idade": 25, "email": "joao@example.com" },
    { "id": 2, "nome": "Maria", "idade": 30, "email": "maria@example.com" }
]
```

### 2. Adicionar um Novo Usuário

- **Método:** `POST`
- **Endpoint:** `/users`
- **Descrição:** Adiciona um novo usuário à lista.

**Corpo da Requisição:**
```json
{
    "nome": "Novo Usuário",
    "idade": 28,
    "email": "novo@example.com"
}
```

**Exemplo de Resposta:**
```json
{
    "id": 3,
    "nome": "Novo Usuário",
    "idade": 28,
    "email": "novo@example.com"
}
```

**Status Codes:**
- `201 Created`: Usuário criado com sucesso.
- `400 Bad Request`: Campos obrigatórios não fornecidos.

### 3. Deletar um Usuário

- **Método:** `DELETE`
- **Endpoint:** `/users/:id`
- **Descrição:** Deleta um usuário com base no ID fornecido.

**Exemplo de Requisição:**
```
DELETE /users/1
```

**Exemplo de Resposta:**
```json
{
    "message": "Usuário deletado com sucesso"
}
```

**Status Codes:**
- `200 OK`: Usuário deletado com sucesso.
- `404 Not Found`: Usuário não encontrado.

## Como Rodar a API

1. Clone o repositório:
   ```bash
   git clone https://github.com/ivandiasdev/apicadastro
   cd apicadastro
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. Acesse a API em `http://localhost:3000`.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
