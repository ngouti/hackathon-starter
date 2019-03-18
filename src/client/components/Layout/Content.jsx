import React from 'react'
import classNames from 'classnames'
import { Router, navigate } from '@reach/router'
import { Page } from './Page'
import './Page.scss'

export function Content({ inside }) {
  return (
    <Router className="content">
      { inside }
    </Router>
  )
}

