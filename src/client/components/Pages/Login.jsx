import React from 'react'
import { Page } from '../Layout/Page'
import { Inspect } from '../Common/Inspect'
import { useAuth } from '../../hooks'
import { navigate } from '@reach/router'

export default function Login() {
  let { user, isLoggedIn } = useAuth({ required: true })

  if (isLoggedIn) {
    navigate('/')
  }

  return (
    <Page centeredMessage><h1>Logging In...</h1></Page>
  )
}
