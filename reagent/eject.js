const chalk = require('chalk');
const config = require('../helpers/conf');
const { createDirs, copyTemplateContent } = require('../helpers/fs');

function eject(pathname) {

  const cwd = process.cwd();
  createDirs(pathname, cwd);

  const templatesPath = config.templatesPath;
  const targetPath    = `${cwd}/${pathname}`;
  copyTemplateContent(templatesPath, targetPath);

  config.setValue('userTemplatesPath', targetPath);
  config.save();

  console.log('');
  console.log(chalk.bold.green('  All templates are successfully ejected'));
  console.log('');
}

module.exports = {
  eject,
};
