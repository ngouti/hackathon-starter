import React from 'react'
import classNames from 'classnames'

export default ({ children, visible = true, className, back, style, ...props }) => {
  return (
    <div
      className={classNames('page', className)}
      style={style}
    >
      { visible && children }
    </div>
  )
}
