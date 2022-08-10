import {instance} from "../../../../sc1-main/m3-dal/instance";


export const registrationApi = {

  registration(email: string, password: string) {
    return instance.post('', {email, password}).then(res => res.data)
  }
}
