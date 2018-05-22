'use strict';

import { createSecureResourceQuery } from '../../../infrastructure/database/knex/secureResourceQueries';
import { SecureResourceFactory } from '../../../../../Domain/secureResource/secureResourceFactory';

export async function createSecureResourceHandler(request, h) {
  const connection = request.server.app.db;
  try {
    const secureResource = SecureResourceFactory(request.payload);
    secureResource.encrypt();
    await createSecureResourceQuery(secureResource.toObject(), connection);
  } catch(e) {
    console.log(e);
    return 'failed';
  }
  return 'ok';
}

