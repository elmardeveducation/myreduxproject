import {takeEvery, put, call} from 'redux-saga/effects';
import {getMydata} from './myApirequest';

export function* myWorkerfunc() {
  const json = yield call(getMydata);
  yield put({type: 'FROMWORKER', data: json});
  console.log('Hello from Worker Saga and json');
}

export function* myWatcherfunc() {
  yield takeEvery('LOAD_DATA', myWorkerfunc);
}
