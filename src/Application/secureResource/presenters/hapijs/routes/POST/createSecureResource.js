'use strict';

import { createSecureResourceHandler } from "../../handlers/createSecureResource";

export const createSecureResourceRoute = {
  method: 'POST',
  path: '/secureResource',
  handler: createSecureResourceHandler,
};
