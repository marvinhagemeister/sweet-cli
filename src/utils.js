const chalk = require('chalk');

function pad(str) {
  return ` ${str} `;
}

function printFactory(opts) {
  let { type, title, message, titleStyle, messageStyle } = opts;

  if (typeof message === 'undefined') {
    message = title;
    title = type.charAt(0).toUpperCase();
  } else {
    message = chalk[messageStyle](message)
  }

  title = pad(title);

  return {
    title: pad(chalk[titleStyle](title)),
    message
  }
}

module.exports = {
  printFactory,
  pad
};
