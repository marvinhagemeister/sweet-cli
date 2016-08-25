const t = require('chai').assert;
const chalk = require('chalk');
const { pad, padMessage } = require('../src/utils');

describe('Utils', () => {

  describe('pad()', () => {
    it('should pad a string', () => {
      t.equal(pad('test'), ' test ');
    });
  });

  describe('padMessage()', () => {
    it('should pad a message', () => {
      const str = 'Hello World \n This is amazing!';
      t.equal(padMessage(4, str), 'Hello World \n    This is amazing!');
    });
  });
});
