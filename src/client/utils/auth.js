import auth0 from 'auth0-js'
import { navigate } from '@reach/router'
import axios from './axios'
import { globalStore } from '@kwhitley/use-store'

window.axios = axios

globalStore
  .set('user',
    {
      isLoggedIn: false,
      profile: undefined,
      error: undefined,
    },
    { persist: true }
  )

export class Auth {
  accessToken
  idToken
  expiresAt
  isLoggedIn

  //need to figure out best way to pass domain/clientID/redirectURI as this will be pre-compiled in the docker image
  //also, the audience is essential for getting back the right auth token
  auth0 = new auth0.WebAuth({
    domain: 'arundo-develop.auth0.com', // ENV
    clientID: 'zSWL2GxGu4ONSGRvyxbkqiLNU7MAYdYE', // ENV
    audience: 'https://develop.arundo.com', // ENV
    redirectUri: `${location.origin}/auth/login`,
    responseType: 'token id_token',
    scope: 'openid email profile'
  })

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.renewSession = this.renewSession.bind(this)
    this.scheduleLogout = this.scheduleLogout.bind(this)
  }

  handleAuthentication() {
    let hash = location.hash

    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          resolve(this)
        } else if (err) {
          console.warn(err)
          reject(err)
        }
      })
    })
  }

  setSession({ expiresIn, idToken, accessToken, idTokenPayload, ...whatever }) {
    // Set the time that the access token will expire at
    let expiresAt = (expiresIn * 1000) + new Date().getTime()
    this.accessToken = accessToken
    this.idToken = idToken
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    this.expiresAt = expiresAt
    this.isLoggedIn = true
    this.profile = idTokenPayload || {}
    this.profile.initials = idTokenPayload.name.replace(/(\b[\w])[^\s]* ?/gi, '$1')

    this.scheduleLogout()
    // navigate to the home route
    // console.log('auth.returnTo', this.returnTo)
    // navigate(this.returnTo || '/')
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult)
       } else if (err) {
         this.logout()
         console.log(err)
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
       }
    })
  }

  scheduleLogout() {
    let expiresAt = this.expiresAt
    const timeout = expiresAt - Date.now()
    if (timeout > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.logout()
      }, timeout)
    }
  }

  logout() {
    return new Promise((resolve, reject) => {
      // Remove tokens and expiry time
      this.accessToken = null
      this.idToken = null
      this.expiresAt = 0
      this.isLoggedIn = false

      // Remove isLoggedIn flag from localStorage
      globalStore.clear('user')

      resolve()
    })
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt
    return this.isLoggedIn && (new Date().getTime() < expiresAt)
  }

  login() {
    this.auth0.authorize()
  }
}

export default new Auth()
