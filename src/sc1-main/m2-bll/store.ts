import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppActionType, appReducer} from "./appReducer";
import {LoginActionType, authReducer} from "../../sc2-features/f1-auth/Login/l2-bll/authReducer";
import {ContactsActionType, contactsReducer} from "../../sc2-features/f2-contacts/u2-bll/contactsReducer";
// Saga
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";


const sagaMiddleware = createSagaMiddleware()

export type AppStateType = ReturnType<typeof rootReducer>;
export type RootActionsType = | AppActionType | LoginActionType | ContactsActionType;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, RootActionsType>;
export type AppDispatchType = ThunkDispatch<AppStateType, unknown, RootActionsType>;

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  users: contactsReducer,
});

// Custom `useDispatch` and `useSelector: Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootWatcher)

// @ts-ignore
window.store = store;