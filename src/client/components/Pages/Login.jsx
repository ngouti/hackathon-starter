import React from 'react'
import { navigate } from '@reach/router'
import { Page } from '../Layout/Page'
import { useAuth } from '../../hooks'

export function Login() {
  let { user, isLoggedIn } = useAuth({ required: true })

  if (isLoggedIn) {
    navigate('/')
  }

  return (
    <Page centeredMessage><h1>Logging In...</h1></Page>
  )
}
