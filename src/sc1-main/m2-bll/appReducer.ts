const initialState = {
  appIsInitialized: false,
  appIsLoading: false,
  appError: null as null | string,
}

type InitialStateType = typeof initialState

export const appReducer = (
  state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
  switch (action.type) {
    case AppActionsTypes.toggleAppLoading:
    case AppActionsTypes.setAppIsInitialized:
    case AppActionsTypes.setAppError:
      return {...state, ...action.payload}
    default:
      return state
  }
}
// Type
export type AppActionType = ReturnType<typeof setAppErrorAC>
  | ReturnType<typeof setAppIsInitializedAC>
  | ReturnType<typeof toggleAppLoadingAC>
  | ReturnType<typeof asyncInitializeAppAC>

export enum AppActionsTypes {
  toggleAppLoading = "app/TOGGLE-APP-LOADING",
  setAppIsInitialized = "app/SET-INITIALIZED",
  setAppError = "app/SET-ERROR",
}
export enum AsyncAppActionsTypes {
  initializeApp = "app/INITIALIZE",
}

export const setAppErrorAC = (appError: null | string) =>
  ({type: AppActionsTypes.setAppError, payload: {appError}} as const);
export const setAppIsInitializedAC = (appIsInitialized: boolean) =>
  ({type: AppActionsTypes.setAppIsInitialized, payload: {appIsInitialized}} as const);
export const toggleAppLoadingAC = (appIsLoading: boolean) =>
  ({type: AppActionsTypes.toggleAppLoading, payload: {appIsLoading}} as const);

// Saga
export const asyncInitializeAppAC = () =>
  ({type: AsyncAppActionsTypes.initializeApp} as const);


