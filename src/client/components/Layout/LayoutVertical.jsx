import React from 'react'
import classNames from 'classnames'
import { Header } from './Header'
import { Footer } from './Footer'
import { Toasts } from './Toasts'
import { AutoRouter } from './AutoRouter'
import '../../styles/app.scss'
import './LayoutVertical.scss'

export const LayoutVertical = ({
  children,
  items,
  className,
  ...props
}) => {
  return (
    <div className={classNames('layout vertical', className)}>
      <Header items={items} />

      <AutoRouter routes={items} className="content">
        { children }
      </AutoRouter>

      <Toasts />
    </div>
  )
}
