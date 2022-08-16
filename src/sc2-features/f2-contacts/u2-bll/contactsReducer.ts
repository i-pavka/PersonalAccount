export type _ContactsItemType = {
  id: string
  name: string
  fullName: string
  phone: string
  email: string
  address: Address
  company: string
}
export type ContactsItemType = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}
interface Geo {
  lat: string
  lng: string
}
interface Company {
  name: string
  catchPhrase: string
  bs: string
}

const initialState = {
  contacts: [
    // {
    //   id: uid(),
    //   name: 'Leanne',
    //   fullName: 'Leanne Graham',
    //   phone: '1(770)736-80-31',
    //   email: 'sincere@april.biz',
    //   address: {
    //     street: 'Apt. 556',
    //     city: 'Gwenborough',
    //   },
    //   company: 'Romaguera-Crona',
    // },
    // {
    //   id: uid(),
    //   name: 'Ervin',
    //   fullName: 'Ervin Howell',
    //   phone: '8(010)692-65-93',
    //   email: 'ervin@yesenia.net',
    //   address: {
    //     street: 'Douglas Extension. 234',
    //     city: 'McKenziehaven',
    //   },
    //   company: 'Deckow-Crist',
    // },
    // {
    //   id: uid(),
    //   name: 'Kurtis',
    //   fullName: 'Kurtis Weissnat',
    //   phone: '9(775)976-67-94',
    //   email: 'Kurtis.roeger@billy.biz',
    //   address: {
    //     street: 'Suite 449',
    //     city: 'Bartholomebury',
    //   },
    //   company: 'Yost and Sons',
    // }
  ] as ContactsItemType[],
  totalCount: 0,
  pageSize: 15,
  currentPage: 1,
  isLoadingUsersData: false,
}

type InitialStateType = typeof initialState

export const contactsReducer = (
  state: InitialStateType = initialState, action: ContactsActionType): InitialStateType => {
  switch (action.type) {
    case ActionsTypes.setContactsData:
    case ActionsTypes.loadingStatus:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export type ContactsActionType = ReturnType<typeof setContactsDataAC>
  | ReturnType<typeof loadingStatusAC>
  | ReturnType<typeof asyncFetchUsersAC>
  | ReturnType<typeof asyncToggleLoadingAC>

export enum ActionsTypes {
  setContactsData = 'contacts/SET-CONTACTS-DATA',
  loadingStatus = 'contacts/LOADING-STATUS',
}
export enum AsyncActionsTypes {
  toggleLoading = 'contacts/TOGGLE-LOADING',
  fetchUsers = 'contacts/FETCH-USERS',
}

// Action creators
export const setContactsDataAC = (contacts: ContactsItemType[]) => (
  {type: ActionsTypes.setContactsData, payload: {contacts}} as const);
export const loadingStatusAC = (isLoadingUsersData: boolean) => (
  {type: ActionsTypes.loadingStatus, payload: {isLoadingUsersData}} as const);

// Saga
export const asyncToggleLoadingAC = () => ({type: AsyncActionsTypes.toggleLoading} as const);
export const asyncFetchUsersAC = () => ({type: AsyncActionsTypes.fetchUsers} as const);




