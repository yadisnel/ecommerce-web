import { all } from 'redux-saga/effects';
import { changeLanguageAsyncWatcher } from "../modules/Translation/redux/translationSagas";


export default function* rootSaga() {
  yield all([
    changeLanguageAsyncWatcher(),
  ]);
}
