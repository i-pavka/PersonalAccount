import {AppThunkType} from "../../../../sc1-main/m2-bll/store";

const initState = {
  authData: {
    id: '',
    login: '',
    email: '',
  },
};


export const loginReducer = (
  state: InitStateType = initState, action: LoginActionType): InitStateType => {
  switch (action.type) {
    default:
      return state;
  }
};


// Action creators
export const loginAC = (authData: AuthType) =>
  ({type: "login/LOGIN", payload: {authData}} as const);


// Thunk creators
export const loginThunkTC = (email: string, password: string):
  AppThunkType => (dispatch) => {

};
export const logoutThunkTC = ():
  AppThunkType => (dispatch) => {

};


// Types
type InitStateType = typeof initState;
export type AuthType = {
  id: string,
  login: string,
  email: string,
}
export type LoginActionType = ReturnType<typeof loginAC>
