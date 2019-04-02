import React from 'react'

export const Div = ({ children, ...props }) =>
  <div {...props}>
    { children }
  </div>
