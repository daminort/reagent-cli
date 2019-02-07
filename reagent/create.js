const inquirer = require('inquirer');
const FileUtils = require('../utils/FileUtils');
const { ENTITY_TYPES, BOOL } = require('../config/constants');
const {
  questionsStart,
  questionsComponent,
  questionsContainer,
  questionsReduxSection,
  questionsUserTemplates,
} = require('../config/questions');

function create() {

  let resultAnswers = {};

  inquirer.prompt(questionsStart)
    .then(answers => {
      resultAnswers = { ...answers };
      const { type } = resultAnswers;

      let questions = null;
      switch (type) {
        case ENTITY_TYPES.component: 
          questions = questionsComponent;
          break;
        case ENTITY_TYPES.container: 
          questions = questionsContainer;
          break;
        case ENTITY_TYPES.reduxSection: 
          questions = questionsReduxSection;
          break;
        case ENTITY_TYPES.userTemplate: 
          questions = questionsUserTemplates;
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
          FileUtils.copyTemplate(resultAnswers);
        });
  });
}

module.exports = {
  create,
}
