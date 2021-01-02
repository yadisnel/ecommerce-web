import { CHANGE_LANGUAGE } from "./translationActions";
import { translations } from "../translations";

const initialState={
  language: translations.es
}

const TranslationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {...state, language: action.payload}
    default:
      return state
  }
}

export default TranslationReducer;
