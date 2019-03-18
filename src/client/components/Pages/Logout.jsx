import React from 'react'
import { Page } from '../Layout/Page'
import { useAuth } from '../../hooks'

export function Logout() {
  let { logoutAction } = useAuth()

  setTimeout(() => logoutAction(), 500)

  return (
    <Page centeredMessage><h1>Logging Out...</h1></Page>
  )
}
