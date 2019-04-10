import React from 'react'
import { Router } from '@reach/router'
import classNames from 'classnames'

export const AutoRouter = ({
  children,
  routes = [],
  className,
}) => {
  let routesWithComponents = routes.filter(r => r.component)

  return (
    (children || !routesWithComponents.length)
    ? <div className={classNames('content', className)}>
        { children }
      </div>
    : <Router className={classNames('content', className)}>
        {
          routesWithComponents.map(({ component: C, to }, i) => (
            <C key={to} path={to} />
          ))
        }
      </Router>
  )
}
