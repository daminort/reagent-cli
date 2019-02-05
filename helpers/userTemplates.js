const fs = require('fs');
const chalk = require('chalk');
const config = require('../helpers/conf');
const choicesBool = require('../choices/bool');
const { validateName } = require('../helpers/validators');
const { confirmMessage } = require('./questions');

function isUserTemplates() {
  const templates = readUserTemplates();
  return Boolean(templates);
}

function readUserTemplates() {
  const userTemplatesPath = config.userTemplatesPath;
  if (!userTemplatesPath) {
    return null;
  }
  const configFile = `${userTemplatesPath}/config.json`;

  try {
    const jsonData = fs.readFileSync(configFile, 'utf8');
    const templatesConfig = JSON.parse(jsonData);
    const templates = templatesConfig.templates;

    return (Array.isArray(templates) && templates.length) ? templates : null;

  } catch (err) {
    return null;
  }
}

function createUserChoices(templates) {

  return templates.map(item => ({
    value : item.type,
    name  : item.description,
  }));
}

function createUserQuestions() {
  const templates = readUserTemplates();
  if (!templates) {
    return [];
  }
  const choices = createUserChoices(templates);

  const result = [
    {
      name: 'templateName',
      type: 'list',
      message: 'What type of component would you like to create?',
      choices: choices,
    }, {
      name: 'name',
      type: 'input',
      message: 'Name:',
      validate: validateName,
    }, {
      name: 'location',
      type: 'input',
      message: 'Location:',
    }, {
      name: 'correct',
      type: 'list',
      message: (answers) => confirmUserMessage(answers, templates),
      choices: choicesBool,
    },
  ];

  return result;
}

function confirmUserMessage(answers, userTemplates) {
  confirmMessage(answers, userTemplates);
}

module.exports = {
  isUserTemplates,
  readUserTemplates,
  createUserQuestions,
};
