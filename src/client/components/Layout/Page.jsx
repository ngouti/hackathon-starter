import React from 'react'
import classNames from 'classnames'
import './Page.scss'

export const Page = ({
  children,
  visible = true,
  className,
  back,
  style,
  ...props,
}) =>
  <div
    className={classNames('page', className)}
    style={style}
  >
    { visible && children }
  </div>
