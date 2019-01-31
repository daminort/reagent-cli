const choicesComponent = require('../choices/component');
const choicesBool = require('../choices/bool');
const { validateName } = require('../helpers/validators');
const { confirmMessage }= require('../helpers/questions');

const questionsComponent = [
  {
    name: 'templateName',
    type: 'list',
    message: 'What type of component would you like to create?',
    choices: choicesComponent
  }, {
    name: 'name',
    type: 'input',
    message: 'Component name:',
    validate: validateName,
  }, {
    name: 'location',
    type: 'input',
    message: 'Component location (include src part):',
    default: 'src/components',
  }, {
    name: 'correct',
    type: 'list',
    message: confirmMessage,
    choices: choicesBool,
  },
];

module.exports = questionsComponent;