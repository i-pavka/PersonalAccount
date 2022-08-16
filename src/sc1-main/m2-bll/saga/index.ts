import {all} from 'redux-saga/effects';
import usersWatcher from "./usersSaga";
import {authWatcher} from "./authSaga";
import {appWatcher} from "./appSaga";

export function* rootWatcher() {
  yield all([usersWatcher(), authWatcher(), appWatcher()])
}