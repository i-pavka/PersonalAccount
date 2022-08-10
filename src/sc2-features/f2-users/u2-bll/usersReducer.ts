import {AppThunkType} from "../../../sc1-main/m2-bll/store";


export type UsersItemType = {
  id: number
  name: string
  followed: boolean
  photos: {
    large: null | string
    small: null | string
  }
  status: null | string
  uniqueUrlName: null | string
}

const initialState = {
  users: [] as UsersItemType[],
  totalCount: 0,
  pageSize: 15,
  currentPage: 1,
  isLoadingUsers: false,
}

type InitialStateType = typeof initialState

export const usersReducer = (
  state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
  switch (action.type) {
    default:
      return state
  }
}

export type UsersActionType = ReturnType<typeof setUsersDataAC>



export const setUsersDataAC = (users: UsersItemType[]) => (
  {type: "users/SET-USERS-DATA", payload: {users}} as const);


export const getUsersDataTC = (): AppThunkType => (dispatch) => {

};



