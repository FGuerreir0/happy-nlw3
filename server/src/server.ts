import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(errorHandler);

app.listen(3010);

/*---------DRIVER NATIVE
Executa todo o query no node

EX: sqlite3.query('SELECT * from users')

//---------QUERY  BUILDER
Query escrita em Javascript, que depois é convertido para o node 

EX: knex('users).select('*').where('country', 'portugal')

//---------ORM (Utilizado neste projecto)
OBJECT RELATIONAL MAPPING

Faz uso de classes para cada tabela e faz relação directa com objectos
*/
