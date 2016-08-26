const t = require('chai').assert;
const chalk = require('chalk');
const { log, info, warning, error, success, transparent } = require('../src/templates');
const { pad } = require('../src/utils');

describe('Templates', () => {

  describe('Log', () => {
    it('should render with only a message', () => {
      const title = pad(chalk.bgWhite(' L '));

      t.deepEqual(log('Hello World'), {
        title,
        message: 'Hello World'
      });
    });

    it('should render with both a message and a title', () => {
      const title = pad(chalk.bgWhite(' LOGGER '));

      t.deepEqual(log('LOGGER', 'Hello World'), {
        title,
        message: chalk.white('Hello World')
      });
    });
  });

  describe('Info', () => {
    it('should render with only a message', () => {
      const title = pad(chalk.bgBlue(' I '));

      t.deepEqual(info('Hello World'), {
        title,
        message: 'Hello World'
      });
    });

    it('should render with both a message and a title', () => {
      const title = pad(chalk.bgBlue(' INFO Test '));

      t.deepEqual(info('INFO Test', 'Hello World'), {
        title,
        message: chalk.blue('Hello World')
      });
    });
  });

  describe('Warning', () => {
    it('should render with only a message', () => {
      const title = pad(chalk.bgYellow(' W '));

      t.deepEqual(warning('Hello World'), {
        title,
        message: 'Hello World'
      });
    });

    it('should render with both a message and a title', () => {
      const title = pad(chalk.bgYellow(' WARNING Test '));

      t.deepEqual(warning('WARNING Test', 'Hello World'), {
        title,
        message: chalk.yellow('Hello World')
      });
    });
  });

  describe('Error', () => {
    it('should render with only a message', () => {
      const title = pad(chalk.bgRed(' E '));

      t.deepEqual(error('Hello World'), {
        title,
        message: 'Hello World'
      });
    });

    it('should render with both a message and a title', () => {
      const title = pad(chalk.bgRed(' ERROR Test '));

      t.deepEqual(error('ERROR Test', 'Hello World'), {
        title,
        message: chalk.red('Hello World')
      });
    });
  });

  describe('Success', () => {
    it('should render with only a message', () => {
      const title = pad(chalk.bgGreen(' S '));

      t.deepEqual(success('Hello World'), {
        title,
        message: 'Hello World'
      });
    });

    it('should render with both a message and a title', () => {
      const title = pad(chalk.bgGreen(' SUCCESS Test '));

      t.deepEqual(success('SUCCESS Test', 'Hello World'), {
        title,
        message: chalk.green('Hello World')
      });
    });
  });

  describe('Transparent', () => {
    it('should render with only a message', () => {
      const title = pad('   ');

      t.deepEqual(transparent('Hello World'), {
        title,
        message: 'Hello World'
      });
    });

    it('should render with both a message and a title', () => {
      const title = pad('Test');

      t.deepEqual(transparent('Test', 'Hello World'), {
        title,
        message: 'Hello World'
      });
    });
  });

});
