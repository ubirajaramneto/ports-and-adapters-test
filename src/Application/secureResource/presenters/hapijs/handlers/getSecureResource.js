'use strict';

import { getSecureResourceQuery } from '../../../infrastructure/database/knex/secureResourceQueries';
import { SecureResourceFactory } from '../../../../../Domain/secureResource/secureResourceFactory';

export async function getSecureResourceHandler(request, h) {
  const connection = request.server.app.db;
  let preparedResourcesFromDb;
  try {
    const secureResourceFromDb = await getSecureResourceQuery(request.params.secureResourceId, connection);
    if (isDataSetFromDbEmpty(secureResourceFromDb) === true) return [];
    preparedResourcesFromDb = secureResourceFromDb.map(resource => {
      resource.encryptionKey = request.params.encryptionKey;
      return SecureResourceFactory(resource).decrypt();
    });
  } catch(e) {
    console.log(e);
    return [];
  }
  return preparedResourcesFromDb;
}

function isDataSetFromDbEmpty(data) {
  return data && data.length === 0;
}
