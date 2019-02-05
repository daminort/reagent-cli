const chalk = require('chalk');
const config = require('../helpers/conf');

function setPath(pathname) {
  config.setValue('userTemplatesPath', pathname);
  config.save();

  const message = pathname
    ? '  Path to user defined templates is saved: ' + pathname
    : '  Path to user defined templates is cleared';

  console.log('');
  console.log(chalk.bold.green(message));
  console.log('');
}

module.exports = {
  setPath,
};
