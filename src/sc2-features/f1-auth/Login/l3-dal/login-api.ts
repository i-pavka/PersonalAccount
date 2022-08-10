import {instance} from "../../../../sc1-main/m3-dal/instance";


export const loginApi = {

  login() {
    return instance.post('', {}).then(res => res.data)
  },
  logout() {
    return instance.delete('').then(res => res.data)
  }
}
