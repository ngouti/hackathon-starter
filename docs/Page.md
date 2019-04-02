# <Page>

Simple Page component

## Props:
- `centeredMessage` `<boolean=false>`: places children in the center of the page, for full screen messaging
- `morePadding` `<boolean=false>`: adds more padding to the page
- `visible` `<boolean=true>`: toggles visibility of the children

## Example (Auto-Generation):
```js
import React from 'react'
import { Page } from '@arundo/react-shell'

export default function MyPage() {
  return (
    <Page>
      <h1>Big Title</h1>
      <p>Some content here...</p?
    </Page>
  )
}
```
