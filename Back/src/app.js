// Importando as dependências
// const app = require('express')();
const { PORT } = require('dotenv').config().parsed;
const express = require("express");
const app = express();
const cors = require("cors");

//Implementando o Prisma
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// Middlewares
app.use(express.json());
app.use(cors());
    // habilitação do cors para possibilitar a comunicação entre front e back

    // Implementação alternativa:
        // const bodyParser = require("body-parser");
        // app.use(bodyParser.json());

// Conexão com o mapeamento das rotas
const cars = require("../routes/cars");
app.use('/cars', cars);

// Habilitando a aplicação
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))