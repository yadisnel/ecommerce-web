import {SET_USER, SHOW_LOADING_LOGIN_MODAL, SHOW_LOGIN_MODAL} from "../actionTypes";

const INIT_STATE = {
    user: null,
    showLoginModal: false,
    showLoadingLoginModal: false
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {

        case SET_USER:
            return { ...state, user:action.payload };
        case SHOW_LOGIN_MODAL:
            return { ...state, showLoginModal:action.payload };
        case SHOW_LOADING_LOGIN_MODAL:
            return { ...state, showLoadingLoginModal:action.payload };

        default:
            return state;
    }
}
