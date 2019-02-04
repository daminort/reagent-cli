const chalk = require('chalk');
const { CONFIRM } = require('../constants/confirm');

function confirmMessage(answers) {
  console.log('');
  console.log(chalk.bold.blue('  We are ready to start. Is all data correct?'));
  console.log('');

  const messages = formatAnswers(answers);
  messages.forEach(item => {
    console.log(item);
  });
  console.log('');
}

function formatAnswers(answers) {
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
    const valueString = CONFIRM[value] || value;

    return `  ${chalk.bold(keyString)} ${spaces}: ${valueString}`;
  });

  return result;
}

module.exports = {
  confirmMessage,
}