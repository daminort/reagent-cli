const chalk = require('chalk');
const { CONFIRM } = require('../constants/confirm');

function confirmMessage(answers, userTemplates = null) {
  console.log('');
  console.log(chalk.bold.blue('  We are ready to start. Is all data correct?'));
  console.log('');

  const messages = formatAnswers(answers, userTemplates);
  messages.forEach(item => {
    console.log(item);
  });
  console.log('');
}

function formatAnswers(answers, userTemplates = null) {
  const keys = Object.keys(answers);
  const maxLength = keys.reduce((length, key) => {
    const keyString = CONFIRM[key] || key;
    if (keyString.length > length) {
      return keyString.length;
    }
    return length;
  }, 0);

  const result = keys.map(key => {
    const keyString = CONFIRM[key] || key;
    const spaceCount = maxLength - keyString.length;
    const spaces = Array(spaceCount).fill(' ').join('');
    const value = answers[key];
    const valueString = userTemplates
      ? userTemplateValue(value, userTemplates) || value
      : CONFIRM[value] || value;

    return `  ${chalk.bold(keyString)} ${spaces}: ${valueString}`;
  });

  return result;
}

function userTemplateValue(type, userTemplates) {
  if (!userTemplates) {
    return null;
  }

  const currentTemplate = userTemplates.find(item => item.type === type);
  if (!currentTemplate) {
    return null;
  }
  
  return currentTemplate.description;
}

module.exports = {
  confirmMessage,
}