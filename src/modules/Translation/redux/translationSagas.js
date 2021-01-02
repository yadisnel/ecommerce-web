import { put, takeEvery } from 'redux-saga/effects';

//Local
import { CHANGE_LANGUAGE_ASYNC, changeLanguage } from "./translationActions";
import { FACTS_ENDPOINT } from "../../../common/networking/endpoints";
import { translations } from "../translations";

function* changeLanguageAsync() {
  try {

    const json = yield fetch(FACTS_ENDPOINT)
      .then(response => response.json(), );

    console.log('fetched data:', json)

    yield put(changeLanguage(translations.en));

  } catch (error) {
    console.log(error)
  }
}

export function* changeLanguageAsyncWatcher() {
  yield takeEvery(CHANGE_LANGUAGE_ASYNC, changeLanguageAsync)
}
