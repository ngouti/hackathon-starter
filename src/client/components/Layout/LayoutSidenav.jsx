import React, { useState } from 'react'
import { useStore } from '@kwhitley/use-store'
import classNames from 'classnames'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidenav } from './Sidenav'
import '../../styles/app.scss'
import './LayoutSidenav.scss'

export const LayoutSidenav = ({ children, navigation, className, ...props }) => {
  let [ isOpen, setIsOpen ] = useStore('sidenavIsOpen', true)
  let classes = {}
  let theme = {}

  return (
    <div className={classNames('layout sidenav', className)}>
      <Header />

      <Sidenav items={navigation} />

      <div className={classNames('content', isOpen ? 'drawer-open' : 'drawer-closed')}>
        { children }
      </div>
    </div>
  )
}
