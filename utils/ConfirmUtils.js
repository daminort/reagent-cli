const chalk = require('chalk');
const ConfigUtils  = require('../utils/ConfigUtils');
const { CONFIRM } = require('../config/constants');

class ConfirmUtils {

  constructor() {
    this.confirmMessage    = this.confirmMessage.bind(this);
    this.formatAnswers     = this.formatAnswers.bind(this);
    this.getMaxLength      = this.getMaxLength.bind(this);
    this.userTemplateValue = this.userTemplateValue.bind(this);
  }

  confirmMessage(answers) {
    console.log('');
    console.log(chalk.bold.blue('  We are ready to start. Is all data correct?'));
    console.log('');

    const messages = this.formatAnswers(answers);
    messages.forEach(item => {
      console.log(item);
    });
    console.log('');
  }

  formatAnswers(answers) {
    const keys = Object.keys(answers);
    const maxLength = this.getMaxLength(keys);

    const result = keys.map(key => {
      const keyString = CONFIRM[key] || key;
      const spaceCount = maxLength - keyString.length;
      const spaces = Array(spaceCount).fill(' ').join('');
      const value = answers[key];
      const valueString = ConfigUtils.isUserTemplates
        ? (userTemplateValue(value) || value)
        : (CONFIRM[value] || value);

      return `  ${chalk.bold(keyString)} ${spaces}: ${valueString}`;
    });

    return result;
  }

  getMaxLength(keys) {
    const maxLength = keys.reduce((length, key) => {
      const keyString = CONFIRM[key] || key;
      if (keyString.length > length) {
        return keyString.length;
      }
      return length;
    }, 0);

    return maxLength;
  }

  userTemplateValue(type) {  
    const template = ConfigUtils.userTemplates.find(item => item.type === type);
    if (!template) {
      return null;
    }
    
    return template.description;
  }
}

module.exports = new ConfirmUtils();
