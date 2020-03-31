const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/*
    *Rota e Recurso
*/ 


/*
    *Metodos HTTP:
     * GET = Buscar/listar uma informação no Back-end;
     * POST = Criar uma informação no Back-end;
     * PUT = Alterar uma informação no Back-end;
     * DELETE = Deletar uma informação no Back-end
*/ 

/** 
 * Tipos de Parametros
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros de Paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * noSQL: MongoDB, CouchDB, etc
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */




