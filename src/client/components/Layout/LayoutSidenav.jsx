import React, { useState } from 'react'
import { useStore } from '@kwhitley/use-store'
import { Router } from '@reach/router'
import classNames from 'classnames'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidenav } from './Sidenav'
import '../../styles/app.scss'
import './LayoutSidenav.scss'

export const LayoutSidenav = ({
  children,
  navigation,
  className,
  ...props
}) => {
  let [ isOpen, setIsOpen ] = useStore('sidenavIsOpen', true)
  let classes = {}
  let theme = {}
  let routesWithComponents = navigation.filter(r => r.component)

  return (
    <div className={classNames('layout sidenav', className)}>
      <Header />

      <Sidenav items={navigation} />

      {
        children
        ? <div className={classNames('content', isOpen ? 'drawer-open' : 'drawer-closed')}>{ children }</div>
        : routesWithComponents.length &&
            <Router className={classNames('content', isOpen ? 'drawer-open' : 'drawer-closed')}>
              {
                routesWithComponents.map(({ component: C, to }, i) => (
                  <C key={to} path={to} />
                ))
              }
            </Router>
      }
    </div>
  )
}
