import {call,put, takeLatest} from "redux-saga/effects";
import { SIGNIN_REQUEST, SIGNUP_REQUEST, SIGNUP_SUCCESFULL } from "../actionTypes";
import { signin,signup,succesaut } from "../../redux/auth/action";

function* Signin() {
    yield put(signin());
   
}

function* Signup() {
    yield put(signup());
   
}

function* Succesfull() {
    yield put(succesaut());
   
}

export function* WatcherAuthApp() {
    yield takeLatest(SIGNIN_REQUEST,Signin)
    yield takeLatest(SIGNUP_REQUEST,Signup)
    yield takeLatest(SIGNUP_SUCCESFULL,Succesfull)
}
