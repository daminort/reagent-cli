import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  data: {},
});

export default function ReduxImmutableReducer(state = initState, action) {

  switch (action.type) {

    case actions.DATA_REFRESH: {
      const { data } = action.payload;
      return state.set('data', data);
    }

    case actions.DATA_RESET: {
      return initState;
    }

    default:
      return state;
  }
}
