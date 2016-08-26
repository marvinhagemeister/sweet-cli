const factory = require('./utils').printFactory;

function log(title, message) {
  return factory({
    type: 'log',
    title,
    titleStyle: 'bgWhite',
    message,
    messageStyle: 'white'
  });
}

function info(title, message) {
  return factory({
    type: 'info',
    title,
    titleStyle: 'bgBlue',
    message,
    messageStyle: 'blue'
  });
}

function warning(title, message) {
  return factory({
    type: 'warning',
    title,
    titleStyle: 'bgYellow',
    message,
    messageStyle: 'yellow'
  });
}

function error(title, message) {
  return factory({
    type: 'error',
    title,
    titleStyle: 'bgRed',
    message,
    messageStyle: 'red'
  });
}

function success(title, message) {
  return factory({
    type: 'success',
    title,
    titleStyle: 'bgGreen',
    message,
    messageStyle: 'green'
  });
}

function transparent(title, message) {
  return factory({
    type: 'transparent',
    title,
    message
  });
}

module.exports = {
  info,
  log,
  warning,
  error,
  success,
  transparent
};
