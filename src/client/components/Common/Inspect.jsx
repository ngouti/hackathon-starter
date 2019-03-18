import React from 'react'

export const Inspect = ({ item }) => <pre>{ JSON.stringify(item, null, 2) }</pre>
