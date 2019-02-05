
const inquirer = require('inquirer');
const choicesCommon = require('../choices/common');
const { isUserTemplates } = require('../helpers/userTemplates');
const { TYPES } = require('../constants/common');

if (isUserTemplates()) {
  choicesCommon.unshift(new inquirer.Separator());
  choicesCommon.unshift({
    value: TYPES.userTemplate,
    name: 'User defined template',
  });
}

const questionsCommon = [
  {
    name: 'type',
    type: 'list',
    message: 'What would you like to create?',
    choices: choicesCommon
  },
];

module.exports = questionsCommon;