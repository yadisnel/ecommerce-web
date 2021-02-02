import {SET_USER, SHOW_LOADING_LOGIN_MODAL, SHOW_LOGIN_MODAL, SIGN_IN_REQUEST,SHOW_SIGNUP_MODAL} from "../actionTypes";

//Esta accion solo guarda el objeto user en el reducer
export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

//Esta accion dispara la saga SignIn porque hay un watcher escuchando SIGN_IN_REQUEST, el payload va a ser recibido por la saga
export const login = (username, password) => ({
    type: SIGN_IN_REQUEST,
    payload: { username, password }
})

export const setShowLoginModal = (show) => ({
    type: SHOW_LOGIN_MODAL,
    payload: show
})

export const setShowSignUpModal = (show) => ({
    type: SHOW_SIGNUP_MODAL,
    payload: show
})

export const setShowLoadingLoginModal = (show) => ({
    type: SHOW_LOADING_LOGIN_MODAL,
    payload: show
})
