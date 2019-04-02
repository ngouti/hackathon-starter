import React from 'react'
import classNames from 'classnames'
import { Header } from './Header'
import { Footer } from './Footer'
import '../../styles/app.scss'
import './LayoutVertical.scss'

export const LayoutVertical = ({ children, className, ...props }) => {
  return (
    <div className={classNames('layout vertical', className)}>
      <Header />

      <div className="content">
        { children }
      </div>
    </div>
  )
}
