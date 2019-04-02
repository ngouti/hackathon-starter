# LayoutVertical
[< Go Back](../README.md)

Layout with only top header bar,

## Props:
- `children` **optional**: current loading state

## Example:
```js
import React from 'react'
import { LayoutVertical, Page } from '@arundo/react-shell'

export default function App() {
  return (
    <LayoutVertical>
      <Page centeredMessage>
        <h1>Welcome to Arundo Apps!</h1>
      </Page>
    </LayoutVertical>
  )
}
```
