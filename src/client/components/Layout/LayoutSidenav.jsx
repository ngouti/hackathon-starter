import React, { useState } from 'react'
import { useStore } from '@kwhitley/use-store'
import { Toasts } from './Toasts'
import classNames from 'classnames'
import { Header } from './Header'
import { Footer } from './Footer'
import { Sidenav } from './Sidenav'
import { AutoRouter } from './AutoRouter'
import '../../styles/app.scss'
import './LayoutSidenav.scss'

export const LayoutSidenav = ({
  children,
  items,
  className,
  ...props
}) => {
  let [ isOpen, setIsOpen ] = useStore('sidenavIsOpen', true, { persist: true })

  return (
    <div className={classNames('layout sidenav', className)}>
      <Header className={isOpen ? 'drawer-open' : 'drawer-closed'}/>

      <Sidenav items={items} />

      <AutoRouter routes={items} open={isOpen} className={classNames('content', isOpen ? 'drawer-open' : 'drawer-closed')}>
        { children }
      </AutoRouter>

      <Toasts />
    </div>
  )
}
