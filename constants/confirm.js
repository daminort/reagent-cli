const { COMPONENT_TYPES } = require('./components');
const { CONTAINER_TYPES } = require('./containers');
const { REDUX_TYPES }     = require('./redux');

const CONFIRM = {
  templateName                                : 'Template',
  name                                        : 'Name',
  location                                    : 'Location',

  [COMPONENT_TYPES.funcComponent]             : 'Functional component',
  [COMPONENT_TYPES.funcComponentStyled]       : 'Functional component (+ styled Wrapper)',
  [COMPONENT_TYPES.classComponent]            : 'Class-based component',
  [COMPONENT_TYPES.classComponentStyled]      : 'Class-based component (+ styled Wrapper)',

  [CONTAINER_TYPES.funcContainerRedux]        : 'Functional container (+ Redux)',
  [CONTAINER_TYPES.funcContainerReduxStyled]  : 'Functional container (+ Redux and styled Wrapper)',
  [CONTAINER_TYPES.classContainerRedux]       : 'Class-based container (+ Redux)',
  [CONTAINER_TYPES.classContainerReduxStyled] : 'Class-based container (+ Redux and styled Wrapper)',

  [REDUX_TYPES.redux]                         : 'Redux actions + Reducer',
  [REDUX_TYPES.reduxImmutable]                : 'Redux actions + Immutable reducer',
  [REDUX_TYPES.reduxSaga]                     : 'Redux actions + Reducer + Saga',
  [REDUX_TYPES.reduxImmutableSaga]            : 'Redux actions + Immutable reducer + Saga',
};

module.exports = {
  CONFIRM,
};
