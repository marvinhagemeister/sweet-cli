const chalk = require('chalk');
const indent = require('indent-string');

function pad(str) {
  return ` ${str} `;
}

function indentExceptFirstLine(str, len) {
  const lines = str.split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (i === 0) {
      continue;
    }

    lines[i] = indent(lines[i], len);
  }

  return lines.join('\n');
}

function printFactory(opts) {
  let { type, title, message, titleStyle, messageStyle } = opts;

  if (typeof message === 'undefined') {
    // MAGIC: 1 left + 2 bg pad + 1 content + 2 right
    message = indentExceptFirstLine(title, 6);

    if (type === 'transparent') {
      title = '   ';
    } else {
      title = type.charAt(0).toUpperCase();
      title = pad(title);
      title = chalk[titleStyle](title).trim();
    }
  } else if (type !== 'transparent') {
    message = chalk[messageStyle](message)
    title = pad(title);
    title = chalk[titleStyle](title).trim();
  }

  return {
    title: pad(title),
    message
  }
}

module.exports = {
  printFactory,
  pad,
  indentExceptFirstLine
};
