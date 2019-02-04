const pref = 'ReduxImmutableSaga';

const actions = {
  DATA_RELOAD  : `${pref}/dataReload`,
  DATA_REFRESH : `${pref}/dataRefresh`,
  DATA_RESET   : `${pref}/dataReset`,

  dataReload: id => ({
    type: actions.DATA_RELOAD,
    payload: {
      id,
    },
  }),
  dataRefresh: data => ({
    type: actions.DATA_REFRESH,
    payload: {
      data,
    },
  }),
  dataReset: () => ({
    type: actions.DATA_RESET,
  }),
};

export default actions;
