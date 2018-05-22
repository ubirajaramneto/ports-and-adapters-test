'use strict';

import Joi from 'joi';

export const secureResourceSchema = Joi.object().keys({
  id: Joi.string().max(32).required(), // id being infinite length might have some impact on the database layer, lets allow a maximum of 32 characters.
  encryptionKey: Joi.string().alphanum().required(),
  value: Joi.any().required(),
});

// This piece of code can be decoupled to allow any other library to perform object schema validation, but for the
// sake of simplicity I'll stick with this current implementation.
export function SecureResourceValidator(resource) {

  function validateSchema () {
    Joi.assert(resource, secureResourceSchema, 'SecureResourceSchema');
  }

  return { validateSchema };

}
