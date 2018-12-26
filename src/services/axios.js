import axios from 'axios'

let axiosInstance

/**
 * @description
 * @returns {axios}
 */
const getInstance = () => {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: 'http://localhost:9000',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    })
  }
  return axiosInstance
}

export default {
  getInstance
}
