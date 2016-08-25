const t = require('chai').assert;
const index = require('../src/index');

describe('Index', () => {
  it('should have the right exports', () => {
    const exported = ['clear', 'log', 'info', 'warning',
      'error', 'success'];

    t.equal(index.length, exported.lenght);

    exported.forEach(name =>
      t.ok(typeof index[name] === 'function'));
  });
});
