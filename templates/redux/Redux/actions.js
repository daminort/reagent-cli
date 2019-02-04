const pref = 'Redux';

const actions = {
  DATA_REFRESH : `${pref}/dataRefresh`,
  DATA_RESET   : `${pref}/dataReset`,

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
