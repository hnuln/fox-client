import axios from 'axios'
import { BASE_URL, TIME_OUT } from '../config'

/**
 * @description: 二次封装axios库
 * @param {string} baseURL
 * @param {number} timeout
 * @return {*}
 */
function FoxRequest(baseURL, timeout) {
  const instance = axios.create({
    baseURL,
    timeout,
    withCredentials: true,
    headers: {
      // 设置后端需要的传参类型
      // 'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest',
    }
  })

  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      return config
    },
    (err) => {
      // 对请求错误做些什么
      return Promise.reject(err)
    }
  )
  // 响应拦截器
  instance.interceptors.response.use(
    (res) => {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      return res
    },
    (err) => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(err)
    }
  )

  const request = (config) => {
    return new Promise((resolve, reject) => {
      instance
        .request(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  }

  const get = (config) => {
    return request({ ...config, method: 'GET' })
  }

  const post = (config) => {
    return request({ ...config, method: 'POST' })
  }

  const patch = (config) => {
    return request({ ...config, method: 'PATCH' })
  }

  const del = (config) => {
    return request({ ...config, method: 'DELETE' })
  }

  return {
    get,
    post,
    patch,
    del
  }
}

const request = FoxRequest(BASE_URL, TIME_OUT)
export default request
