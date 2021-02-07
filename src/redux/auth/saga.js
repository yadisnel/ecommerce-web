import {call,put, takeLatest, takeEvery} from "redux-saga/effects";
import {SIGN_IN_REQUEST, SIGN_UP_REQUEST} from "../actionTypes";
import {setShowLoadingLoginModal, setShowLoginModal, setUser,setShowSignUpModal,setShowLoadingSignUpModal} from "./action";
import {fetchLogin} from "../../api";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* SignIn(action) {
  try{
    const { username, password } = action.payload;
    yield put(setShowLoadingLoginModal(true))

    yield delay(2000) // En vez de un delay, aqui va la llamada al api de login con username y password. Esa llamada te va a responder un token o un objeto
    const mockedUser = {token: 'falso token', name: username, role: 'admin'} // Este objeto usuario va a ser obtenido del api.
    yield put(setUser(mockedUser))

    //const user = yield fetchLogin(username, password)
    //console.log('osiel', user)
    //TODO: guardar user de forma segura en el local storage para hacer login automatico.
    
    yield put(setShowLoginModal(false))
    yield put(setShowLoadingLoginModal(false))
  } catch (error) {
    yield put(setShowLoadingLoginModal(false))
    if (error.response) {
      //TODO manejar el error y mostrar mensaje al usuario.
      if(error.response.status === 400){
        if(error.response.data.detail === 'Incorrect email or password'){
          // TODO: credenciales incorrectas, mostrar error.
        }
      }
      // Request made and server responded
      console.log('error data', error.response.data);
      console.log('error status', error.response.status);
      console.log('error headers', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('error request', error.request);
    }
    console.log('Error fetching login', error)
  }
}

function* SignUp(action) {
   try {
     const { username, password, confirmpassword} = action.payload;
     //yield put(setShowLoadingLoginModal(true))
     yield put(setShowLoadingSignUpModal(true))
     const mockedUser = { name: username} 
    yield put(setUser(mockedUser))
    yield put(setShowSignUpModal(false))
    
   } catch (error) {
    yield put(setShowLoadingLoginModal(false))
    if (error.response) {
      //TODO manejar el error y mostrar mensaje al usuario.
      if(error.response.status === 400){
        if(error.response.data.detail === 'Incorrect email or password'){
          // TODO: credenciales incorrectas, mostrar error.
        }
      }
      // Request made and server responded
      console.log('error data', error.response.data);
      console.log('error status', error.response.status);
      console.log('error headers', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('error request', error.request);
    }
    console.log('Error fetching login', error)
   }
}

export function* WatcherAuthApp() {
  yield takeEvery(SIGN_IN_REQUEST,SignIn)
  yield takeLatest(SIGN_UP_REQUEST,SignUp)
}
