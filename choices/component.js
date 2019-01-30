const { COMPONENT_TYPES } = require('../constants/components');

const choicesComponent = [
  { 
    value: COMPONENT_TYPES.funcComponent,
    name: 'Functional component',
  }, {
    value: COMPONENT_TYPES.funcComponentStyled,
    name: 'Functional component (with styled wrapper)',
  },
];

module.exports = choicesComponent;
