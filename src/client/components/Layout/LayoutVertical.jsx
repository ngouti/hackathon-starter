import React from 'react'
import classNames from 'classnames'

import { Header } from './Header'
import { Footer } from './Footer'
import './LayoutVertical.scss'

// styles
import '../../styles/app.scss'

export const LayoutVertical = ({ children, className, ...props }) => {
  return (
    <div className={classNames('layout vertical', className)}>
      <Header />

      <div className="content">
        { children }
      </div>

      <Footer />
    </div>
  )
}
