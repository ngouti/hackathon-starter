import React, { useEffect } from 'react'
import Page from '../Layout/Page'

export default function Environment({
  message = "Ooops, that page was not found!",
}) {
  return (
    <Page className="form missing-page">
      <h1>{ message }</h1>
    </Page>
  )
}
