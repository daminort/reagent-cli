import { all, takeEvery, put, fork, call, select } from 'redux-saga/effects';
import actions from './actions';

import { ReduxSagaAPI } from '../../api/ReduxSagaAPI';

function deriveStoreData({ ReduxSagaAPI }) {

  return {
    data: ReduxSagaAPI.get('data'),
  };
}

function* dataReload() {

  yield takeEvery(actions.DATA_RELOAD, function* (action) {

    const { data } = yield select(deriveStoreData);
    const { id }   = action.payload;

    let newData = null;
    try {
      const res = yield call(ReduxSagaAPI.getData, id);
      if (res && res.status === 200) {
        newData = res.data;
      }
    } catch (error) {
      console.log(error);
    }

    newData = newData || data;

    yield put(actions.dataRefresh(newData));
  });
}

export default function* ReduxSagaSaga() {
  yield all([
    fork(dataReload),
  ]);
}
