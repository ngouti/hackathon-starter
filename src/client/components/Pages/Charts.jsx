import React, { useEffect } from 'react'
import { Page } from '../Layout/Page'
import { useStore } from '@kwhitley/use-store'
import { useTags } from '@arundo/react-data-hooks'
import { message, success, error, warning, info } from 'services/toasts'
import { useAuth, axios } from '@arundo/react-auth'
import AnyChart from 'anychart-react'

export function Charts() {


  return (
    <Page>
      <h1>Charts</h1>

      <AnyChart
        type="line"
        data={[1, 5, 3, 4]}
        title="Simple pie chart"
        />
    </Page>
  )
}
