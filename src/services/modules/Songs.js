import axiosInstance from '../axios'

const axios = axiosInstance.getInstance()

export default class Songs {
  static _get (url) {
    return axios.get(url).then(res => Promise.resolve(res.data))
  }

  static getSongList () {
    return this._get('/api/songs/')
  }

  static getSongLyrics (id) {
    return this._get(`/api/song/${id}`)
  }
}
