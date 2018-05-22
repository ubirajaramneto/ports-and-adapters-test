'use strict';

import { getSecureResourceHandler } from '../../handlers/getSecureResource';

export const getSecureResourceRoute = {
  method: 'GET',
  path: '/secureResource/{secureResourceId}/{encryptionKey}',
  handler: getSecureResourceHandler,
};
