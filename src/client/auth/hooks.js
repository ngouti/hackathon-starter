import { useState, useEffect } from 'react'
import { useStore } from '@kwhitley/use-store'
import { AuthInstance } from './index.js'
import { axios } from './axios'

const AUTH0_RETURNTO_KEY = 'auth0:returnTo'

const doActionWhenUnauthenticated = (action = () => {}) => (err) => {
  console.log('axios error', err.response.status)
}

let logoutAction = () => AuthInstance
                          .logout()
                          .then(() => {
                            localStorage.clear() // clear all localStorage
                            location.href = '/'
                          })

let loginAction = () => {
  localStorage.setItem(AUTH0_RETURNTO_KEY, location.pathname)
  return AuthInstance.login()
}

// instantiate 401 response handler & interceptor reference
let logoutWhenUnauthenticated = doActionWhenUnauthenticated(logoutAction)
let logoutInterceptor = undefined

export const useAuth = (config = {}) => {
  let { required } = config
  let [ user, setUser ] = useStore('user')

  // if anything intercepts an access token, log in, and handle redirect
  if (location.hash.includes('#access_token')) {
    AuthInstance.handleAuthentication()
      .then(({ accessToken, idTokenPayload }) => {
        setUser({
          isLoggedIn: AuthInstance.isLoggedIn,
          profile: AuthInstance.profile || {},
        })
        // redirect to previously saved location (and remove it) or at least sans-hash
        let returnTo = localStorage.getItem(AUTH0_RETURNTO_KEY)
        localStorage.removeItem(AUTH0_RETURNTO_KEY)
        location.href = returnTo || location.pathname
      })
      .catch(err => {})
  } else if (required && !user.isLoggedIn) {
    console.log('user not logged in, redirecting...')
    // store original location to return to after auth
    localStorage.setItem(AUTH0_RETURNTO_KEY, location.pathname)
    AuthInstance.login()
  }

  try {
    if (user.isLoggedIn && user.profile.expiresAt > new Date()) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.profile.accessToken}`
    } else {
      delete axios.defaults.headers.common['Authorization']

      if (user.isLoggedIn) {
        logoutAction()
      }
    }
  } catch (err) {
    console.warn(err)
  }

  let { profile, isLoggedIn, error } = user

  return {
    user: user.profile,
    isLoggedIn: user.isLoggedIn,
    loginAction,
    logoutAction,
    error,
  }
}
