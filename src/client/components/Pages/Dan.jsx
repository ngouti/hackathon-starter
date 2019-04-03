import React from 'react'
import { Page } from '../Layout/Page'
import { useStore } from '@kwhitley/use-store'
import { useTags } from '@arundo/react-data-hooks'
import { axios } from '@arundo/react-auth'

export function Dan() {
  let [ counter ] = useStore('counter', 0, { persist: true })
  let { data: tags, isLoading } = useTags()

  window.axios = axios

  return (
    <Page centeredMessage>
      <h1>Dan's Page</h1>

      {
        !isLoading
        ? <p>You have { tags.length } tags!</p>
        : <p>We're loading your tags, please wait...</p>
      }

      <p>The counter is currently { counter }</p>
    </Page>
  )
}
