import {instance} from "../../../sc1-main/m3-dal/instance";


export const usersAPI = {
  getUsers() {
    return instance.get(``)
      .then(res => res.data)
  },
}
