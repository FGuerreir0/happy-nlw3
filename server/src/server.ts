import express from 'express';

import './database/connection';
import routes from './routes';

const app = express();
app.use(express.json());

app.use(routes);

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
