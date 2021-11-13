> Pré-Requisitos:

- MySQL 8.0
- Criar um database com o nome **covidonation**

Para inciar o projeto é necessário baixar as dependecias do projeto.
Acesse a pasta do projeto e execute:

```
npm i
```

Após instalação é necessário criar as tabelas no banco de dados.

```
npm run typeorm migrations:run
```

Após a criação das tabelas do banco é necessário inicar o servidor que está rodando localhost:3000

```
npm run dev:server
```
