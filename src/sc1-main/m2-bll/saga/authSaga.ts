import {call, put, takeEvery} from 'redux-saga/effects';
import request from 'axios';
import {toggleAppLoadingAC} from "../appReducer";
import {authApi} from "../../../sc2-features/f1-auth/Login/l3-dal/auth-api";
import {
  AsyncAuthActionsTypes,
  LoginDataType,
  setAuthDataAC,
  toggleIsAuthAC
} from "../../../sc2-features/f1-auth/Login/l2-bll/authReducer";

type responseDataType = {
  _id: string
  created: string
  email: string
  name: string
  token: string
}
function* loginUser(action: {authData:LoginDataType, type: string}) {
  yield put(toggleAppLoadingAC(true));
  try {
    const response: responseDataType = yield call(authApi.logIn, action.authData);
    const {_id, email, name} = response;
    yield put(setAuthDataAC({_id, email, name}));
    yield put(toggleIsAuthAC(true));
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const errorMassage = error.response.data as {error: string}
      console.log(errorMassage.error)
    }
  } finally {
    yield put(toggleAppLoadingAC(false));
  }
}
function* logOutUser() {
  yield put(toggleAppLoadingAC(true));
  try {
    const response: {info: string} = yield call(authApi.logOut);
    yield put(toggleIsAuthAC(false));
    yield put(setAuthDataAC({_id: '', name: '', email: ''}));
    console.log(response.info);
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const errorMassage = error.response.data as {error: string}
      console.log(errorMassage.error)
    }
  } finally {
    yield put(toggleAppLoadingAC(false));
  }
}

export function* authWatcher() {
  yield takeEvery(AsyncAuthActionsTypes.login, loginUser)
  yield takeEvery(AsyncAuthActionsTypes.logOut, logOutUser)
}

