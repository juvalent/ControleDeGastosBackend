# Controle de Gastos - Backend

## Sobre o Projeto

O Controle de Gastos é uma API REST desenvolvida para auxiliar no gerenciamento de despesas pessoais. A aplicação permite cadastrar usuários, categorias e gastos, organizando as informações de forma simples e eficiente.

O projeto foi desenvolvido utilizando Node.js, Express e SQLite, seguindo uma arquitetura organizada em rotas, controllers e banco de dados.

A API realiza operações de cadastro, consulta, atualização e remoção de dados, além de disponibilizar o cálculo do valor total dos gastos registrados.

## Tecnologias Utilizadas

* Node.js
* Express
* SQLite
* Better SQLite3
* Nodemon

## Estrutura do Projeto

```text
controleDegastosBackend/
│
├── controllers/
├── database/
├── routes/
├── server.js
├── package.json
└── README.md
```

## Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acessar a Pasta do Projeto

```bash
cd controleDegastosBackend
```

### 3. Instalar as Dependências

```bash
npm install
```

### 4. Criar as Tabelas do Banco de Dados

Execute o comando abaixo para gerar o banco SQLite e criar as tabelas necessárias:

```bash
node database/createTables.js
```

Após a execução, será criado automaticamente o arquivo do banco de dados local.

### 5. Iniciar a Aplicação

Modo desenvolvimento:

```bash
npm run dev
```

ou

```bash
node server.js
```

### 6. Acessar a API

O servidor será iniciado na porta 3000:

```text
http://localhost:3000
```

A partir desse endereço, as rotas da API poderão ser consumidas por ferramentas como Insomnia, Postman ou aplicações frontend.

## Objetivo Acadêmico

Este projeto foi desenvolvido com fins acadêmicos para praticar conceitos de desenvolvimento backend, APIs REST, integração com banco de dados relacional, organização de código em camadas e operações CRUD utilizando JavaScript no ambiente Node.js.
