import actions from './actions';

const initState = {
  data: {},
};

export default function ReduxSagaReducer(state = initState, action) {

  switch (action.type) {

    case actions.DATA_REFRESH: {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    }

    case actions.DATA_RESET: {
      return {
        ...initState
      };
    }

    default:
      return state;
  }
}
