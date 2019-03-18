import React from 'react'
import classNames from 'classnames'
import './Page.scss'

export function Page ({
  children,
  visible = true,
  className,
  back,
  style,
  centeredMessage,
  ...props,
}) {
  return (
    <div
      className={classNames('page', centeredMessage && 'centered-message', className)}
      style={style}
      {...props}
    >
      { visible && children }
    </div>
  )
}

