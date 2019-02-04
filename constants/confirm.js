const { COMPONENT_TYPES } = require('./components');

const CONFIRM = {
  templateName                               : 'Template',
  name                                       : 'Name',
  location                                   : 'Location',

  [COMPONENT_TYPES.funcComponent]            : 'Functional component',
  [COMPONENT_TYPES.funcComponentStyled]      : 'Functional component (+ styled Wrapper)',
  [COMPONENT_TYPES.funcComponentRedux]       : 'Functional component (+ Redux)',
  [COMPONENT_TYPES.funcComponentReduxStyled] : 'Functional component (+ Redux and styled Wrapper)',
};

module.exports = {
  CONFIRM,
};
