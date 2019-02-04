const choicesContainer = require('../choices/container');
const choicesBool = require('../choices/bool');
const { validateName } = require('../helpers/validators');
const { confirmMessage }= require('../helpers/questions');

const questionsContainer = [
  {
    name: 'templateName',
    type: 'list',
    message: 'What type of container would you like to create?',
    choices: choicesContainer
  }, {
    name: 'name',
    type: 'input',
    message: 'Container name:',
    validate: validateName,
  }, {
    name: 'location',
    type: 'input',
    message: 'Container location (include src part):',
    default: 'src/containers',
  }, {
    name: 'correct',
    type: 'list',
    message: confirmMessage,
    choices: choicesBool,
  },
];

module.exports = questionsContainer;
