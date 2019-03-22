import React from 'react'
import { Router, navigate } from '@reach/router'
import classNames from 'classnames'

import { MissingPage } from '../Common/MissingPage'
import { Header } from './Header'
import { Footer } from './Footer'
import { Page } from './Page'
import Somewhere from '../Pages/Somewhere'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
import { Home } from '../Pages/Home'
import { Content } from './Content'

// styles
import './styles/app.scss'

export const LayoutVertical = ({ children, className, ...props }) => {
  return (
    <div className={classNames('layout vertical', className)}>
      <Header />

      { children }

      <Footer />
    </div>
  )
}
