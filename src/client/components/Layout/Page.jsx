import React from 'react'
import classNames from 'classnames'
import './Page.scss'

export const Page = ({
  children,
  visible = true,
  className,
  back,
  style,
  centeredMessage,
  ...props,
}) =>
  <div
    className={classNames('page', centeredMessage && 'centered-message', className)}
    style={style}
  >
    { visible && children }
  </div>
