import {SIGNIN_REQUEST, SIGNUP_REQUEST, SIGNUP_SUCCESFULL} from '../actionTypes'

export const signin = (user) => ({
    type: SIGNIN_REQUEST,
    payload: user
})

export const signup = (user) => ({
    type: SIGNUP_REQUEST,
    payload: user
})

export const succesaut = () => ({
    type:SIGNUP_SUCCESFULL
    
})