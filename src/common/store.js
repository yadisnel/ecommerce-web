import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

//Local
import TranslationReducer from "../modules/Translation/redux/translationReducer";

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  translation: TranslationReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store
