const initState = {
  authData: {
    _id: '',
    name: '',
    email: '',
  },
  isAuth: false
};


export enum AuthActionsTypes {
  setAuthData = "auth/SET-AUTH-DATA",
  toggleIsAuth = "auth/TOGGLE-IS-AUTH",
}
export enum AsyncAuthActionsTypes {
  login = "auth/LOGIN",
  logOut = "auth/LOGOUT",
}

export const authReducer = (
  state: InitStateType = initState, action: LoginActionType): InitStateType => {
  switch (action.type) {
    case AuthActionsTypes.setAuthData:
    case AuthActionsTypes.toggleIsAuth:
      return {...state, ...action.payload}
    default:
      return state;
  }
};


// Action creators
export const setAuthDataAC = (authData: AuthType) =>
  ({type: AuthActionsTypes.setAuthData, payload: {authData}} as const);
export const toggleIsAuthAC = (isAuth: boolean) => (
  {type: AuthActionsTypes.toggleIsAuth, payload: {isAuth}} as const);


// Saga
export const asyncLoadingAC = (authData: LoginDataType) => (
  {type: AsyncAuthActionsTypes.login,  authData} as const);
export const asyncLogOutAC = () => (
  {type: AsyncAuthActionsTypes.logOut} as const);


// Types
type InitStateType = typeof initState;
export type AuthType = {
  _id: string,
  name: string,
  email: string,
}

export type LoginDataType = {
  email: string,
  password: string,
  rememberMe: boolean
}

export type LoginActionType = ReturnType<typeof setAuthDataAC>
| ReturnType<typeof toggleIsAuthAC>
| ReturnType<typeof asyncLoadingAC>
| ReturnType<typeof asyncLogOutAC>
