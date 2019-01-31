#!/usr/bin/env node
const inquirer           = require('inquirer');

const questionsCommon    = require('./questions/common');
const questionsComponent = require('./questions/component');

const { TYPES, BOOL }    = require('./constants/common');
const { copyTemplate }   = require('./helpers/fs');

// Grab arguments
//const [,, ...args] = process.argv;

let resultAnswers = {};

inquirer.prompt(questionsCommon)
  .then(answers => {
    resultAnswers = { ...answers };
    const { type } = resultAnswers;

    switch (type) {
      case TYPES.component: {
        inquirer.prompt(questionsComponent)
          .then(answers => {
            resultAnswers = { ...resultAnswers, ...answers };
            const { correct } = resultAnswers;
            if (correct === BOOL.no) {
              process.exit(0);
            }
            copyTemplate(resultAnswers);
          });
        break;
      }
      case TYPES.container: {
        console.log('Sorry, this functionality is developing. Current answers:');
        console.log(resultAnswers);
        break;
      }
      case TYPES.reduxSection: {
        console.log('Sorry, this functionality is developing. Current answers:');
        console.log(resultAnswers);
        break;
      }
      default: {
        console.log('Unknown type of creature');
      }
    }
});