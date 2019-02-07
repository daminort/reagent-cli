const chalk = require('chalk');
const ConfigUtils = require('../utils/ConfigUtils');
const FileUtils = require('../utils/FileUtils');

function eject() {

  const pathname = 'templates';
  const cwd = ConfigUtils.cwd;
  FileUtils.createDirs(pathname, ConfigUtils.cwd);

  const templatesPath = ConfigUtils.templatesPath;
  const targetPath    = `${cwd}/${pathname}`;
  FileUtils.copyTemplateContent(templatesPath, targetPath);

  ConfigUtils.setSettingsValue('userTemplatesPath', targetPath);
  ConfigUtils.saveSettings();

  console.log('');
  console.log(chalk.bold.green('  All templates are successfully ejected'));
  console.log('');
}

module.exports = {
  eject,
};
