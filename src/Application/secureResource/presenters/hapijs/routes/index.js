'use strict';

import { getSecureResourceRoute } from './GET/getSecureResource';
import { createSecureResourceRoute } from './POST/createSecureResource';

export default [
  getSecureResourceRoute,
  createSecureResourceRoute
];
