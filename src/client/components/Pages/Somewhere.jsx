import React from 'react'
import { Page } from 'Layout/Page'
import { useAuth } from 'hooks'

export default function Somewhere() {
  let { isLoggedIn } = useAuth({ required: true })

  return isLoggedIn && (
    <Page>Somewhere that requires login...</Page>
  )
}
