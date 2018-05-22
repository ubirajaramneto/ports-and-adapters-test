'use strict';

import { SecureResource } from './secureResource';
import { SecureResourceValidator } from './secureResourceValidator';

export function SecureResourceFactory(data) {

  const secureResourceValidator = SecureResourceValidator(data);
  const secureResource = SecureResource(data);
  secureResourceValidator.validateSchema();

  return secureResource;

}
