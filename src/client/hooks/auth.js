import { useState, useEffect } from 'react'
import { navigate } from '@reach/router'
import { useStore } from './store'
import auth from '../utils/auth'

export function useAuth(config = {}) {
  let { required } = config
  let [ user, setUser ] = useStore('user')

  useEffect(() => {
    if (location.hash.includes('#access_token')) {
      auth.handleAuthentication()
        .then(({ accessToken, idTokenPayload }) => {
          setUser({
            isLoggedIn: auth.isLoggedIn,
            profile: auth.profile || {},
          })
          // remove access token hash
          navigate(location.pathname)
        })
        .catch(err => {})
    } else if (required && !user.isLoggedIn) {
      console.log('user not logged in, redirecting...')
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

  return {
    user: user.profile,
    isLoggedIn: user.isLoggedIn,
    loginAction: auth.login,
    logoutAction,
    error,
  }
}
