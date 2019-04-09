# LoremIpsum
[< Go Back](../../README.md)

Generic Lorem Ipsum Content

## Props:
- `page` `<boolean=false>`: places content within a [Page](./Page.md) component

## Example (Basic):
```js
import React from 'react'
import { LoremIpsum } from '@arundo/react-shell'

export const MyPage = () => {
  return (
    <Page>
      <LoremIpsum />
    </Page>
  )
}
```

## Example (As Page):
```js
import React from 'react'
import { LoremIpsum } from '@arundo/react-shell'

export const MyPage = () => <LoremIpsum page />
```
