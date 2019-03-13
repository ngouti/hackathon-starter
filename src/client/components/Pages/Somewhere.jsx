import React from 'react'
import { Page } from '../Layout/Page'
import { useAuth } from '../../hooks'

export default function Somewhere() {
  let { user, isLoggedIn } = useAuth({ required: true })

  console.log('Somewhere:user', user)

  return (
    <Page>Somewhere... isLoggedIn = { isLoggedIn ? 'yes' : 'no' }</Page>
  )
}
