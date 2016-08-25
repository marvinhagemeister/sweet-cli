const chalk = require('chalk');
const templates = require('./templates');
const { clear, generic } = require('./logger');

function log(title, message) {
  return generic('log', title, message);
}

function info(title, message) {
  return generic('info', title, message);
}

function warning(title, message) {
  return generic('warning', title, message);
}

function error(title, message) {
  return generic('error', title, message);
}

function success(title, message) {
  return generic('success', title, message);
}

module.exports = {
  clear,
  log,
  info,
  warning,
  error,
  success
}
