const choicesCommon = require('../choices/common');

const questionsCommon = [
  {
    name: 'type',
    type: 'list',
    message: 'What would you like to create?',
    choices: choicesCommon
  },
];

module.exports = questionsCommon;