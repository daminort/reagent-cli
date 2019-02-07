const chalk = require('chalk');
const ConfigUtils = require('../utils/ConfigUtils');

function setValue(name, value) {
  ConfigUtils.setSettingsValue(name, value);
  ConfigUtils.saveSettings();

  console.log('');
  console.log(chalk.bold.green('Settings value has been saved:'));
  console.log(chalk.bold(`${name}: `) + `${value}`);
  console.log('');
}

module.exports = {
  setValue,
};
