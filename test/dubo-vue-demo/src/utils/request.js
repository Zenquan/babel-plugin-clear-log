import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'

const service = axios.create({
  timeout: 100000
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    const {ret, data, msg} = res
    if (ret == '0') {
      return data
    } else {
      Toast(msg)
    }
  },
  (error) => {
    Promise.reject(error)
  }
)

export default service