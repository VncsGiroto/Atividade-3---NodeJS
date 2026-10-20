# API de Gerenciamento de Professores

API REST desenvolvida com **Node.js** e **Express** para o gerenciamento de informações pessoais de professores, departamentos, turmas e disciplinas ministradas em uma escola. Os dados são mantidos em memória durante a execução da aplicação.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## Estrutura do Projeto

```text
├── app.js                            # Inicialização do servidor Express e configuração de rotas
├── routes/
│   └── professorRoutes.js            # Definição dos endpoints de professores
├── controllers/
│   └── professorController.js        # Lógica das operações e armazenamento em memória
├── package.json
└── README.md
```

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/VncsGiroto/Atividade-3---NodeJS.git
   cd Atividade-3---NodeJS
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   npm start
   ```
   *(ou `node app.js`)*

4. O servidor estará disponível em:
   ```text
   http://localhost:3000
   ```

## Endpoints Disponíveis

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/professores` | Lista todos os professores cadastrados |
| `GET` | `/professores/:id` | Busca um professor pelo ID |
| `GET` | `/professores/:id/turmas` | Lista todas as turmas de um professor específico |
| `PUT` | `/professores/:id` | Atualiza os dados de um professor (`nome`, `idade`, `departamento`) |
| `POST` | `/professores/:id/turmas` | Adiciona uma nova turma a um professor (`codigo`, `disciplina`, `alunos`) |
| `GET` | `/professores/departamento/:departamento` | Lista todos os professores de um departamento específico |
| `DELETE` | `/professores/:id` | Remove um professor pelo ID |

### Exemplos de Corpo de Requisição (JSON)

- **Atualizar professor (`PUT /professores/1`):**
  ```json
  {
    "nome": "Prof. Carlos Silva",
    "idade": 42,
    "departamento": "Matemática"
  }
  ```

- **Adicionar turma (`POST /professores/1/turmas`):**
  ```json
  {
    "codigo": "9C",
    "disciplina": "MAT301",
    "alunos": ["Lucas", "Beatriz", "Rafael"]
  }
  ```
