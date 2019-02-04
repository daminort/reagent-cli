const { CONTAINER_TYPES } = require('../constants/containers');

const choicesContainer = [
  {
    value: CONTAINER_TYPES.funcContainerRedux,
    name: 'Functional container (with connecting to Redux)',
  }, {
    value: CONTAINER_TYPES.funcContainerReduxStyled,
    name: 'Functional container (with connecting to Redux and styled wrapper)',
  }, {
    value: CONTAINER_TYPES.classContainerRedux,
    name: 'Class-based container (with connecting to Redux)',
  }, {
    value: CONTAINER_TYPES.classContainerReduxStyled,
    name: 'Class-based container (with connecting to Redux and styled wrapper)',
  },
];

module.exports = choicesContainer;
