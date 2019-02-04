const { COMPONENT_TYPES } = require('../constants/components');

const choicesComponent = [
  { 
    value: COMPONENT_TYPES.funcComponent,
    name: 'Functional component',
  }, {
    value: COMPONENT_TYPES.funcComponentStyled,
    name: 'Functional component (with styled wrapper)',
  }, { 
    value: COMPONENT_TYPES.classComponent,
    name: 'Class-based component',
  }, {
    value: COMPONENT_TYPES.classComponentStyled,
    name: 'Class-based component (with styled wrapper)',
  },
];

module.exports = choicesComponent;
