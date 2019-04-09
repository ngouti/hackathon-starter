import React, { useEffect } from 'react'
import { Page } from '../Layout/Page'
import { useStore } from '@kwhitley/use-store'
import { useTags } from '@arundo/react-data-hooks'
import { message, success, error, warning, info } from 'services/toasts'
import { useAuth, axios } from '@arundo/react-auth'

export function Dan() {
  let [ counter ] = useStore('counter', 0, { persist: true })
  let { data: tags, isLoading } = useTags({ crud: true })

  useEffect(() => {
    // setTimeout(() => addMessage.success('success message!', { autoClose: 10000 }), 2000)
    setTimeout(() => error('error message!'), 3000)
    setTimeout(() => warning({ msg: 'warning message!' }), 3000)
    setTimeout(() => info('info message!'), 3000)

    axios
      .get('http://foo.com')
      .catch(error)
  }, [])


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
