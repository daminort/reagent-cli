const inquirer                = require('inquirer');

const questionsCommon         = require('../questions/common');
const questionsComponent      = require('../questions/component');
const questionsContainer      = require('../questions/container');
const questionsRedux          = require('../questions/redux');

const { TYPES, BOOL }         = require('../constants/common');
const { copyTemplate }        = require('../helpers/fs');
const { createUserQuestions } = require('../helpers/userTemplates');

function create() {

  let resultAnswers = {};

  inquirer.prompt(questionsCommon)
    .then(answers => {
      resultAnswers = { ...answers };
      const { type } = resultAnswers;

      let questions = null;
      switch (type) {
        case TYPES.component: 
          questions = questionsComponent;
          break;
        case TYPES.container: 
          questions = questionsContainer;
          break;
        case TYPES.reduxSection: 
          questions = questionsRedux;
          break;
        case TYPES.userTemplate: 
          questions = createUserQuestions();
          break;
        default:
      }

      if (!questions) {
        console.log('Unknown type of creature');
        process.exit(0);
      }

      inquirer.prompt(questions)
        .then(answers => {
          resultAnswers = { ...resultAnswers, ...answers };
          const { correct } = resultAnswers;
          if (correct === BOOL.no) {
            process.exit(0);
          }
          copyTemplate(resultAnswers);
        });
  });
}

module.exports = {
  create,
}
