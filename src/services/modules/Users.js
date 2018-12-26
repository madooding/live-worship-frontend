import axiosInstance from '../axios'

const axios = axiosInstance.getInstance()

export default class Users {
  static getFacebookUserDetail (token) {
    return axios.get(`https://graph.facebook.com/v3.2/me?fields=id%2Cname%2Cemail&access_token=${token}`).then(res => Promise.resolve(res.data))
  }
}
