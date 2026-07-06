# 📋 To Do List - Frontend

Frontend da aplicação **To Do List**, desenvolvido utilizando **HTML, CSS e JavaScript puro**, hospedado no **Cloudflare Pages** e consumindo uma API REST desenvolvida com **Cloudflare Workers**.

## 🚀 Tecnologias

* HTML5
* CSS3
* JavaScript (ES6+)
* Cloudflare Pages

## 📂 Estrutura do projeto

```text
frontend/
│
├── index.html
├── style.css
└── app.js
```

### Arquivos

#### `index.html`

Responsável pela estrutura da aplicação.

Contém:

* Cabeçalho
* Botão para adicionar tarefa
* Lista de tarefas

---

#### `style.css`

Responsável pela aparência da aplicação.

Inclui:

* Layout responsivo
* Estilização dos cards
* Modal
* Botões
* Campo de pesquisa
* Responsividade para dispositivos móveis

---

#### `app.js`

Responsável por toda a lógica da aplicação.

Funcionalidades:

* Listagem de tarefas
* Cadastro de novas tarefas
* Exclusão de tarefas
* Marcar/desmarcar como concluída
* Pesquisa em tempo real

## 🌐 Comunicação com a API

O frontend consome uma API hospedada no Cloudflare Workers.

Exemplo de configuração:

```javascript
const API_URL = "https://SEU_WORKER.workers.dev";
```

## 📱 Funcionalidades

* ✅ Listar tarefas
* ✅ Criar tarefa
* ✅ Excluir tarefa
* ✅ Marcar como concluída
* ✅ Pesquisa em tempo real
* ✅ Interface responsiva
* ✅ Modal reutilizável para criação e edição

## 📦 Como executar localmente

Basta abrir o arquivo `index.html` em um navegador ou utilizar um servidor HTTP simples.

Exemplo utilizando o VS Code com a extensão **Live Server**.

## ☁️ Deploy

O frontend foi publicado utilizando **Cloudflare Pages**.

## 🔗 Backend

A aplicação utiliza uma API REST desenvolvida com Cloudflare Workers e banco de dados Cloudflare D1.

Fluxo da aplicação:

```text
Usuário
   │
   ▼
Cloudflare Pages
   │
   ▼
Cloudflare Worker (API REST)
   │
   ▼
Cloudflare D1
```

## 👨‍💻 Autor

Desenvolvido como projeto da disciplina de Computação em Nuvem utilizando serviços da Cloudflare.
