const choicesComponent = require('../choices/component');

const questionsComponent = [
  {
    name: 'componentType',
    type: 'list',
    message: 'What type of component would you like to create?',
    choices: choicesComponent
  },
  {
    name: 'componentName',
    type: 'input',
    message: 'Component name:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Component name may only include letters, numbers, underscores and hashes.';
    }
  },
];

module.exports = questionsComponent;