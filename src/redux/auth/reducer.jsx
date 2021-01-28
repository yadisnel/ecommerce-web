import { SIGNIN_REQUEST, SIGNUP_REQUEST, SIGNUP_SUCCESFULL } from '../actionTypes';

const INIT_STATE = {
    usersignin: [],
    usersignup: [],
    usersucces: 'no',
    singleItem: [],
    list:[]
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        
        case SIGNIN_REQUEST:
            return { ...state, usersignin: action.payload };

        case SIGNUP_REQUEST:
            return { ...state, usersignup: action.payload };

        case SIGNUP_SUCCESFULL:
            const succes= state.usersucces
            return { ...state, succes: 'si' };
            
        default:
            return state;
    }
}