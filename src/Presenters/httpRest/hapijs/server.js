'use strict';

import Hapi from 'hapi';
import routes from '../../../Application/secureResource/presenters/hapijs/routes/index';
import knexClient from '../../../Infrastructure/database/sqlite3/knexClient';
import createSqliteTable from '../../../Tools/fixtures/createSqliteTable';

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route(routes);

server.app.db = knexClient;

const init = async () => {
  await server.start();
  await createSqliteTable(knexClient);
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
