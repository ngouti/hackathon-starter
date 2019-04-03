A component library for core React functionality in Arundo apps.

# Requirements
- [Node (current, v10+)](https://nodejs.org/en/download/current/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

# Installation
```
yarn add -D @arundo/react-shell
```

# Usage
```js
import React from 'react'
import { LayoutVertical, Page } from '@arundo/react-shell'

export default function App() {
  return (
    <LayoutVertical>
      <Page>
        <h1>Welcome</h1>
        <p>Welcome to Arundo Apps</p>
      </Page>
    </LayoutVertical>
  )
}
```

# Components
- [LayoutSidenav](/docs/LayoutSidenav.md)
- [LayoutVertical](/docs/LayoutVertical.md)
- [LoremIpsum](/docs/LoremIpsum.md)
- [Page](/docs/Page.md)
