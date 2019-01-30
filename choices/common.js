const { TYPES } = require('../constants/common');

const choicesCommon = [
  { 
    value: TYPES.component,
    name: 'Simply reusable component',
  }, {
    value: TYPES.container,
    name: 'Component-container (stateful or connected to Redux Store)',
  }, {
    value: TYPES.reduxSection,
    name: 'Section of Redux Store',
  },
];

module.exports = choicesCommon;
