import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './category/categorySaga';
import { userSagas } from './user/userSaga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
