'use strict';

export function createSecureResourceQuery(secureResource, connection) {
  return connection.raw(`INSERT OR REPLACE INTO SecureResource (id, value) \n`+
    `  VALUES (  ?, \n` +
    `            ?  \n` +
    `          );`,
    [secureResource.id, secureResource.value])
}

export function getSecureResourceQuery(secureResourceId, connection) {
  return connection.raw('SELECT * FROM SecureResource WHERE id LIKE ( :id)', {id: `${secureResourceId}%`});
}
