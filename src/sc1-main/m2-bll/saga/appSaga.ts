import {call, put, takeEvery} from 'redux-saga/effects';
import request from 'axios';
import {AsyncAppActionsTypes, setAppIsInitializedAC} from "../appReducer";
import {authApi} from "../../../sc2-features/f1-auth/Login/l3-dal/auth-api";
import {AuthType, setAuthDataAC} from "../../../sc2-features/f1-auth/Login/l2-bll/authReducer";


function* initializeApp() {
  try {
    const {_id, name, email}: AuthType = yield call(authApi.authMe);
    yield put(setAuthDataAC({_id, name, email}));
  } catch (error) {
    if (request.isAxiosError(error) && error.response) {
      const errorMassage = error.response.data as { error: string }
      console.log(errorMassage.error)
    }
  } finally {
    yield put(setAppIsInitializedAC(true));
  }
}

export function* appWatcher() {
  yield takeEvery(AsyncAppActionsTypes.initializeApp, initializeApp)
}

