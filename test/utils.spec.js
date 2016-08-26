const t = require('chai').assert;
const chalk = require('chalk');
const { pad, indentExceptFirstLine } = require('../src/utils');

describe('Utils', () => {

  describe('pad()', () => {
    it('should pad a string', () => {
      t.equal(pad('test'), ' test ');
    });
  });

  describe('indentExceptFirstLine()', () => {
    it('should work', () => {
      const message = "[00:00:19] Failed to load external module babel-core/register\n"
      + "[00:00:19] Failed to load external module babel/register\n"
      + "\n"
      + "module, __filename, __dirname) { import ...\n"
      + "                                     ^^^^^^\n"
      + "\n"
      + "SyntaxError: Unexpected reserved word\n"
      + "    at exports.runInThisContext (vm.js:53:16)\n";

      const expected = "[00:00:19] Failed to load external module babel-core/register\n"
      + "    [00:00:19] Failed to load external module babel/register\n"
      + "\n"
      + "    module, __filename, __dirname) { import ...\n"
      + "                                         ^^^^^^\n"
      + "\n"
      + "    SyntaxError: Unexpected reserved word\n"
      + "        at exports.runInThisContext (vm.js:53:16)\n";

      t.deepEqual(indentExceptFirstLine(message, 4), expected);
    });
  });
});
