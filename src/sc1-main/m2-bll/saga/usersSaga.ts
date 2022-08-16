import {put, call, takeEvery} from 'redux-saga/effects';
import {
  AsyncActionsTypes,
  ContactsItemType, loadingStatusAC,
  setContactsDataAC
} from "../../../sc2-features/f2-contacts/u2-bll/contactsReducer";
import {contactsApi} from "../../../sc2-features/f2-contacts/u3-dal/contacts-api";
import {delay} from "../../../sc3-utils/utilityFunctions";


function* loadingUsersData() {
  yield put(loadingStatusAC(true));
  yield delay(1000);
  const data: ContactsItemType[] = yield call(contactsApi.getUsersData)
  yield put(setContactsDataAC(data));
  yield put(loadingStatusAC(false));
}

export default function* usersWatcher() {
  yield takeEvery(AsyncActionsTypes.fetchUsers, loadingUsersData);
}

