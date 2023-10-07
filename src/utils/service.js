import axios from 'axios'
const service = axios.create()
service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
service.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return err
  }
)
export default service
