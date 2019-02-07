const inquirer = require('inquirer');
const ConfigUtils = require('../utils/ConfigUtils');

const {
  ENTITY_TYPES,
  ENTITY_NAMES,
  BOOL,
} = require('./constants');

// Start ----------------------------------------------------------------------
const choicesStart = [
  { value: ENTITY_TYPES.component,    name: ENTITY_NAMES.component    }, 
  { value: ENTITY_TYPES.container,    name: ENTITY_TYPES.container    }, 
  { value: ENTITY_TYPES.reduxSection, name: ENTITY_TYPES.reduxSection },
];

// check if there are user defined templates and add them to start choices
if (ConfigUtils.isUserTemplates) {
  choicesStart.unshift(new inquirer.Separator());
  choicesStart.unshift(
    { value: ENTITY_TYPES.isUserTemplates, name: ENTITY_NAMES.isUserTemplates },
  );
};

// Confirm --------------------------------------------------------------------
const choicesBoolean = [
  { value: BOOL.yes, name: BOOL.yes },
  { value: BOOL.no,  name: BOOL.no  },
];

// Components -----------------------------------------------------------------
const choicesComponent = [
  { value: ENTITY_TYPES.funcComponent,        name: ENTITY_NAMES.funcComponent        },
  { value: ENTITY_TYPES.funcComponentStyled,  name: ENTITY_NAMES.funcComponentStyled  },
  { value: ENTITY_TYPES.classComponent,       name: ENTITY_NAMES.classComponent       },
  { value: ENTITY_TYPES.classComponentStyled, name: ENTITY_NAMES.classComponentStyled },
];

// Containers -----------------------------------------------------------------
const choicesContainer = [
  { value: ENTITY_TYPES.funcContainerRedux,        name: ENTITY_NAMES.funcContainerRedux        },
  { value: ENTITY_TYPES.funcContainerReduxStyled,  name: ENTITY_NAMES.funcContainerReduxStyled  },
  { value: ENTITY_TYPES.classContainerRedux,       name: ENTITY_NAMES.classContainerRedux       },
  { value: ENTITY_TYPES.classContainerReduxStyled, name: ENTITY_NAMES.classContainerReduxStyled },
];

// Redux ----------------------------------------------------------------------
const choicesRedux = [
  { value: ENTITY_TYPES.redux,              name: ENTITY_NAMES.redux              }, 
  { value: ENTITY_TYPES.reduxImmutable,     name: ENTITY_NAMES.reduxImmutable     }, 
  { value: ENTITY_TYPES.reduxSaga,          name: ENTITY_NAMES.reduxSaga          }, 
  { value: ENTITY_TYPES.reduxImmutableSaga, name: ENTITY_NAMES.reduxImmutableSaga },
];

module.exports = {
  choicesStart,
  choicesBoolean,
  choicesComponent,
  choicesContainer,
  choicesRedux,
};
