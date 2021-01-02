
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const CHANGE_LANGUAGE_ASYNC = 'CHANGE_LANGUAGE_ASYNC'

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language
})

export const changeLanguageENAsync = () => ({
  type: CHANGE_LANGUAGE_ASYNC
})
