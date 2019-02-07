const ENTITY_TYPES = {
  component                 : 'component',
  container                 : 'container',
  reduxSection              : 'reduxSection',
  userTemplate              : 'userTemplate',

  funcComponent             : 'FuncComponent',
  funcComponentStyled       : 'FuncComponentStyled',
  classComponent            : 'ClassComponent',
  classComponentStyled      : 'ClassComponentStyled',

  funcContainerRedux        : 'FuncContainerRedux',
  funcContainerReduxStyled  : 'FuncContainerReduxStyled',
  classContainerRedux       : 'ClassContainerRedux',
  classContainerReduxStyled : 'ClassContainerReduxStyled',

  redux                     : 'Redux',
  reduxImmutable            : 'ReduxImmutable',
  reduxSaga                 : 'ReduxSaga',
  reduxImmutableSaga        : 'ReduxImmutableSaga',
};

const ENTITY_NAMES = {
  component                 : 'Simply reusable component',
  container                 : 'Component-container (stateful or connected to Redux Store)',
  reduxSection              : 'Section of Redux Store',
  userTemplate              : 'User defined template',

  funcComponent             : 'Functional component',
  funcComponentStyled       : 'Functional component (with styled wrapper)',
  classComponent            : 'Class-based component',
  classComponentStyled      : 'Class-based component (with styled wrapper)',

  funcContainerRedux        : 'Functional container (with connecting to Redux)',
  funcContainerReduxStyled  : 'Functional container (with connecting to Redux and styled wrapper)',
  classContainerRedux       : 'Class-based container (with connecting to Redux)',
  classContainerReduxStyled : 'Class-based container (with connecting to Redux and styled wrapper)',

  redux                     : 'Redux actions + Reducer',
  reduxImmutable            : 'Redux actions + Immutable reducer',
  reduxSaga                 : 'Redux actions + Reducer + Saga',
  reduxImmutableSaga        : 'Redux actions + Immutable reducer + Saga',
};

const ENTITY_PATH = {
  component    : 'components',
  container    : 'containers',
  reduxSection : 'redux',
  userTemplate : 'userTemplate',
};

const ENTITY_LOCATION = {
  component    : 'src/components',
  container    : 'src/containers',
  reduxSection : 'src/redux',
  userTemplate : '',
};

const BOOL = {
  yes : 'Yes',
  no  : 'No',
};

const QUESTION_TYPES = {
  list  : 'list',
  input : 'input',
};

const QUESTION_FIELDS = {
  type         : 'type',
  templateName : 'templateName',
  name         : 'name',
  location     : 'location',
  correct      : 'correct',
};

const QUESTION_MESSAGES = {
  start                : 'What would you like to create?',

  componentStart       : 'What type of component would you like to create?',
  componentName        : 'Component name:',
  componentLocation    : 'Component location:',
  
  containerStart       : 'What type of container would you like to create?',
  containerName        : 'Container name:',
  containerLocation    : 'Container location:',

  reduxSectionStart    : 'What type of Redux section would you like to create?',
  reduxSectionName     : 'Section name:',
  reduxSectionLocation : 'Section location:',

  userTemplateStart    : 'What type of custom boilerplate would you like to create?',
  userTemplateName     : 'Name:',
  userTemplateLocation : 'Location:',
};

const CONFIRM = {
  [QUESTION_FIELDS.templateName]           : 'Template',
  [QUESTION_FIELDS.name]                   : 'Name',
  [QUESTION_FIELDS.location]               : 'Location',

  [ENTITY_TYPES.funcComponent]             : [ENTITY_NAMES.funcComponent],
  [ENTITY_TYPES.funcComponentStyled]       : [ENTITY_NAMES.funcComponentStyled],
  [ENTITY_TYPES.classComponent]            : [ENTITY_NAMES.classComponent],
  [ENTITY_TYPES.classComponentStyled]      : [ENTITY_NAMES.classComponentStyled],

  [ENTITY_TYPES.funcContainerRedux]        : [ENTITY_NAMES.funcContainerRedux],
  [ENTITY_TYPES.funcContainerReduxStyled]  : [ENTITY_NAMES.funcContainerReduxStyled],
  [ENTITY_TYPES.classContainerRedux]       : [ENTITY_NAMES.classContainerRedux],
  [ENTITY_TYPES.classContainerReduxStyled] : [ENTITY_NAMES.classContainerReduxStyled],

  [ENTITY_TYPES.redux]                     : [ENTITY_NAMES.redux],
  [ENTITY_TYPES.reduxImmutable]            : [ENTITY_NAMES.reduxImmutable],
  [ENTITY_TYPES.reduxSaga]                 : [ENTITY_NAMES.reduxSaga],
  [ENTITY_TYPES.reduxImmutableSaga]        : [ENTITY_NAMES.reduxImmutableSaga],
};

module.exports = {
  ENTITY_TYPES,
  ENTITY_NAMES,
  ENTITY_PATH,
  ENTITY_LOCATION,
  BOOL,
  CONFIRM,
  QUESTION_TYPES,
  QUESTION_FIELDS,
  QUESTION_MESSAGES,
};
