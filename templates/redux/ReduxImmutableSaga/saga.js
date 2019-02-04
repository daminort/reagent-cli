import { all, takeEvery, put, fork, call, select } from 'redux-saga/effects';
import actions from './actions';

import { ReduxImmutableSagaAPI } from '../../api/ReduxImmutableSaga';

function deriveStoreData({ ReduxImmutableSaga }) {

  return {
    data: ReduxImmutableSaga.get('data'),
  };
}

function* dataReload() {

  yield takeEvery(actions.DATA_RELOAD, function* (action) {

    const { data } = yield select(deriveStoreData);
    const { id }   = action.payload;

    let newData = null;
    try {
      const res = yield call(ReduxImmutableSagaAPI.getData, id);
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

export default function* ReduxImmutableSagaSaga() {
  yield all([
    fork(dataReload),
  ]);
}
