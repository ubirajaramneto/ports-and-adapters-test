'use strict';

import crypto from 'crypto';

export function SecureResource(resource) {

  const id = resource.id;
  const encryptionKey = resource.encryptionKey;
  let value = resource.value;

  function toObject() {
    return {
      id,
      value,
    }
  }

  // This is of course a very simple implementation, just for the sake of simplicity.
  function encrypt() {
    const key = crypto.createCipher('aes-128-cbc', encryptionKey);
    let cipher = key.update(value, 'utf8', 'hex');
    value = cipher + key.final('hex');
    return { id, value };
  }

  function decrypt() {
    const key = crypto.createDecipher('aes-128-cbc', encryptionKey);
    const cipher = key.update(value, 'hex', 'utf8');
    value = cipher + key.final('utf8');
    return { id, value }
  }

  return { toObject, encrypt, decrypt}

}
