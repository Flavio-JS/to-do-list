# To-do List Project

Este é um projeto de **To-do List** desenvolvido utilizando **Next.js** com **App Router**, **Tailwind CSS**, **Prisma ORM** e **SQLite** (pode ser alterado, caso necessário). O objetivo deste projeto é permitir que os usuários criem e gerenciem listas de tarefas, com a capacidade de atribuir prioridades e marcar tarefas como concluídas ou não.

## Funcionalidades

- Criar listas de tarefas com um nome identificador
- Definir a prioridade da lista
- Marcar a lista como concluída ou não
- Dentro de cada lista, é possível:
  - Adicionar itens de tarefas com nome
  - Definir a prioridade do item
  - Marcar o item como concluído ou não

## Design

O design da interface do frontend está disponível no [Figma](<https://www.figma.com/design/EcHJTc6vYw6cB0fgFJKT8U/To-do-List-%5BShort-Project%5D-(Community)?node-id=142-332&t=sEsCNQ49vnnZF3Vx-1>).

## Tecnologias Utilizadas

- **Next.js** com **App Router**
- **Tailwind CSS**
- **Prisma ORM**
- **SQLite** (pode ser alterado conforme necessidade)

## Como rodar o projeto localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório em sua máquina local.

2. Instale as dependências do projeto:

```bash
npm install
```

3. Crie um arquivo `.env` com base no arquivo `.env.example` que está no projeto.

4. No arquivo `.env`, adicione uma chave segura (como um UUID) à variável `HASH_SALT`:

5. Execute as migrações do banco de dados:

```bash
npx prisma migrate dev --name init
```

6. Gere os arquivos do Prisma:

```bash
  npx prisma migrate dev --name init
```

7.Inicie o servidor de desenvolvimento:

```bash
  npm run dev
```

O projeto estará rodando em `http://localhost:3000`.
