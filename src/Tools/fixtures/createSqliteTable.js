'use strict'

export default function createSecureResourceTable(client) {
  console.log('Creating tables...');
  return client
  .schema
  .createTableIfNotExists('SecureResource', table => {
    table.string('id').primary();
    table.string('value');
  })
}
