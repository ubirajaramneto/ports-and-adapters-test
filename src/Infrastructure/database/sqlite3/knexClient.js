import knex from 'knex';
import path from 'path';

export default knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve('testdb.sqlite')
  }
})
