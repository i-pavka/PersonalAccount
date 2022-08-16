import {userInstance} from "../../../sc1-main/m3-dal/instance";

export const contactsApi = {
  getUsersData() {
    return userInstance.get(``)
      .then(res => res.data)
  },
}
