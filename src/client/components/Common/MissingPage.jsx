import React from 'react'
import { Page } from '../Layout/Page'

export const MissingPage = ({ message = "Oops, that page was not found!" }) =>
  <Page centeredMessage>
    <h1>{ message }</h1>
  </Page>
