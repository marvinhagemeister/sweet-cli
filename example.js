const { info, success, error, log, transparent } = require('./src/index');

success('SUCCESS', 'Compilation successful!');
info('Build time: 0.625ms\nHASH: whatever.js');
transparent('App is running at http://localhost:300');

error('ERROR', 'in file: ...myfile.js');
const message = "[00:00:19] Failed to load external module babel-core/register\n"
      + "[00:00:19] Failed to load external module babel/register\n"
      + "\n"
      + "module, __filename, __dirname) { import ...\n"
      + "                                     ^^^^^^\n"
      + "\n"
      + "SyntaxError: Unexpected reserved word\n"
      + "    at exports.runInThisContext (vm.js:53:16)\n";

error(message);

log('Lorem ipsum dolor sit amet, consetetur sadipscing\nelitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et \njusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\nsed diam nonumy eirmod tempor invidunt ut\nlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.');
