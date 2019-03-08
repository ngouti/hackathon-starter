import React from 'react'
import { Page } from '../Layout/Page'
import './MissingPage.scss'

export const MissingPage = ({
  message = "Oops, that page was not found!",
}) =>
  <Page className="form missing-page">
    <h1>{ message }</h1>
  </Page>
