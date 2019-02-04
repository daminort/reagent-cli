const { REDUX_TYPES } = require('../constants/redux');

const choicesRedux = [
  {
    value: REDUX_TYPES.redux,
    name: 'Redux actions + Reducer',
  }, {
    value: REDUX_TYPES.reduxImmutable,
    name: 'Redux actions + Immutable reducer',
  }, {
    value: REDUX_TYPES.reduxSaga,
    name: 'Redux actions + Reducer + Saga',
  }, {
    value: REDUX_TYPES.reduxImmutableSaga,
    name: 'Redux actions + Immutable reducer + Saga',
  },
];

module.exports = choicesRedux;
