import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppActionType, appReducer} from "./appReducer";
import {LoginActionType, loginReducer} from "../../sc2-features/f1-auth/Login/l2-bll/loginReducer";
import {
  RegistrationActionType,
  registrationReducer
} from "../../sc2-features/f1-auth/Registration/r2-bll/registrationReducer";
import {UsersActionType, usersReducer} from "../../sc2-features/f2-users/u2-bll/usersReducer";


export type AppStateType = ReturnType<typeof rootReducer>;
export type RootActionsType = | AppActionType | LoginActionType
  | RegistrationActionType | UsersActionType;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, RootActionsType>;
export type AppDispatchType = ThunkDispatch<AppStateType, unknown, RootActionsType>;

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  users: usersReducer,
  registration: registrationReducer,
});

// Custom `useDispatch` and `useSelector: Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;