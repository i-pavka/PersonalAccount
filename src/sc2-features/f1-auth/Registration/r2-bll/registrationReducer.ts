import {AppThunkType} from "../../../../sc1-main/m2-bll/store";

const initState = {
  success: false,
  error: null as null | string,
};


export const registrationReducer = (
  state: InitStateType = initState, action: RegistrationActionType): InitStateType => {
  switch (action.type) {
    default:
      return state;
  }
};


// Action creators
export const setSuccessAC = (success: boolean) =>
  ({type: "registration/SET-SUCCESS", payload: {success}} as const);
export const setErrorAC = (error: null | string) =>
  ({type: "registration/SET-ERROR", payload: {error}} as const);


// Thunk creators
export const registrationTC = (signInData: SignInDataType):
  AppThunkType => (dispatch) => {

};



// Types
type InitStateType = typeof initState;
export type SignInDataType = {
  email: string
  password: string
};
export type RegistrationActionType = ReturnType<typeof setSuccessAC>
| ReturnType<typeof setErrorAC>
