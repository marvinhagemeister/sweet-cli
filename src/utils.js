const chalk = require('chalk');

function pad(str) {
  return ` ${str} `;
}

function padMessage(length, message) {
  const lines = message.split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (i === 0) {
      continue;
    }

    lines[i] = lines[i].trim();

    const expectedLen = lines[i].length + length;

    while(lines[i].length < expectedLen) {
      lines[i] = ' ' + lines[i];
    }
  }

  return lines.join('\n');
}

function printFactory(opts) {
  let { type, title, message, titleStyle, messageStyle } = opts;

  if (typeof message === 'undefined') {
    // MAGIC: 1 left + 2 bg pad + 1 content + 2 right
    message = padMessage(6, title);
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
  pad,
  padMessage
};
