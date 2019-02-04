const choicesRedux = require('../choices/redux');
const choicesBool = require('../choices/bool');
const { validateName } = require('../helpers/validators');
const { confirmMessage }= require('../helpers/questions');

const questionsRedux = [
  {
    name: 'templateName',
    type: 'list',
    message: 'What type of Redux section would you like to create?',
    choices: choicesRedux
  }, {
    name: 'name',
    type: 'input',
    message: 'Section name:',
    validate: validateName,
  }, {
    name: 'location',
    type: 'input',
    message: 'Section location (include src part):',
    default: 'src/redux',
  }, {
    name: 'correct',
    type: 'list',
    message: confirmMessage,
    choices: choicesBool,
  },
];

module.exports = questionsRedux;
