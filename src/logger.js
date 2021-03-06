const templates = require('./templates');

function generic(type, title, message) {
  let out = templates[type](title, message);
  out = render(out);

  return process.stdout.write(out);
}

function render(obj) {
  return `\n${obj.title} ${obj.message}\n`;
}

function clear() {
  process.stdout.write('\x1bc');
}

module.exports = {
  clear,
  generic,
  render
}
