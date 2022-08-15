import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './category/categorySaga';

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
