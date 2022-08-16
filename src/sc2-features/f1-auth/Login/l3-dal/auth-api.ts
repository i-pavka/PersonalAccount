import {authInstance} from "../../../../sc1-main/m3-dal/instance";
import {LoginDataType} from "../l2-bll/authReducer";


export const authApi = {
  logIn(loginData: LoginDataType) {
    return authInstance.post('auth/login', loginData).then(res => res.data)
  },
  logOut() {
    return authInstance.delete('auth/me').then(res => res.data)
  },
  authMe() {
    return authInstance.post('auth/me', {}).then(res => res.data)
  }
}
