import axiosRaw from 'axios'
import { AuthInstance } from './auth'

export const axios = axiosRaw.create()

// Redirect to login on 401 response
function unauthenticatedRedirect(err) {
  if (err.response.status === 401) {
    AuthInstance.login()
  }
  return Promise.reject(err)
}

const interceptorId = axios.interceptors.response.use(null, unauthenticatedRedirect)

export function removeAutoRedirect() {
  axios.interceptors.response.eject(interceptorId)
}
