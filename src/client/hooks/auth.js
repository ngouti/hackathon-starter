import { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import { useStore } from '@kwhitley/use-store'
import auth from '../utils/auth'

const AUTH0_RETURNTO_KEY = 'auth0:returnTo'

export function useAuth(config = {}) {
  let { required } = config
  let [ user, setUser ] = useStore('user')

  useEffect(() => {
    // if anything intercepts an access token, log in, and handle redirect
    if (location.hash.includes('#access_token')) {
      auth.handleAuthentication()
        .then(({ accessToken, idTokenPayload }) => {
          setUser({
            isLoggedIn: auth.isLoggedIn,
            profile: auth.profile || {},
          })
          // redirect to previously saved location (and remove it) or at least sans-hash
          let returnTo = localStorage.getItem(AUTH0_RETURNTO_KEY)
          localStorage.removeItem(AUTH0_RETURNTO_KEY)
          navigate(returnTo || location.pathname)
        })
        .catch(err => {})
    } else if (required && !user.isLoggedIn) {
      console.log('user not logged in, redirecting...')
      // store original location to return to after auth
      localStorage.setItem(AUTH0_RETURNTO_KEY, location.pathname)
      auth.login()
    }
  })

  let { profile, isLoggedIn, error } = user

  let logoutAction = () => auth
                            .logout()
                            .then(() => {
                              setUser({ isLoggedIn: false })
                              navigate('/')
                            })

  let loginAction = () => {
    localStorage.setItem(AUTH0_RETURNTO_KEY, location.pathname)
    return auth.login()
  }

  return {
    user: user.profile,
    isLoggedIn: user.isLoggedIn,
    loginAction,
    logoutAction,
    error,
  }
}
