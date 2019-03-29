import React from 'react'
import './Inspect.scss'

export const Inspect = ({ item }) =>
  <pre className="inspect">
    { JSON.stringify(item, null, 2) }
  </pre>
