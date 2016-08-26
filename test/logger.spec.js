const t = require('chai').assert;
const { render } = require('../src/logger');

describe('Logger', () => {
  describe('render()', () => {
    it('should return the message', () => {
      let input = {
        title: 'Hello World',
        message: 'yo!'
      };

      t.equal(render(input), '\nHello World yo!\n');
    });
  });
});
