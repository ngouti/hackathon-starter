import React from 'react'
import { Page } from '../Layout/Page'
import { useStore } from '@kwhitley/use-store'

export function Dan() {
  let [ counter ] = useStore('counter', 0)

  return (
    <Page centeredMessage>
      <h1>Dan's Page</h1>

      <p>The counter is currently { counter }</p>
    </Page>
  )
}
