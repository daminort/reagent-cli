const { COMPONENT_TYPES } = require('../constants/components');

const choicesComponent = [
  { 
    value: COMPONENT_TYPES.funcComponent,
    name: 'Functional component',
  }, {
    value: COMPONENT_TYPES.funcComponentStyled,
    name: 'Functional component (with styled wrapper)',
  }, {
    value: COMPONENT_TYPES.funcComponentRedux,
    name: 'Functional component (with connecting to Redux)',
  }, {
    value: COMPONENT_TYPES.funcComponentReduxStyled,
    name: 'Functional component (with connecting to Redux and styled wrapper)',
  },
];

module.exports = choicesComponent;
