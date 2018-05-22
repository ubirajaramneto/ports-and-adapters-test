import test from 'ava';
import { SecureResourceFactory } from '../src/Domain/secureResource/secureResourceFactory';

const testResource = {
  id: 'some-unique-id',
  encryptionKey: 'uhnAfmHJ7GoklA3vh9QqxtI45mjAMpTQLIb0noq9Tcais2SJDCTNJIh9emqZopby',
  value: 'some secret value',
};

const encryptedValue = '1c734ae668313eeab0fd07b0cd58ae16fc250ff7eacd6073e021d5728d89848f'; // 'some secret value'

test('It should encrypt the data', t => {
  const resource = SecureResourceFactory(testResource);
  resource.encrypt();
  t.is(resource.toObject().value, encryptedValue);
});

test('It should decrypt the data', t => {
  const resource = SecureResourceFactory(testResource);
  resource.encrypt();
  const decryptedPayload = resource.decrypt();
  t.is(decryptedPayload.value, testResource.value);
});
