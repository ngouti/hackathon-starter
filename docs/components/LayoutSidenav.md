# LayoutSidenav
[< Go Back](../../README.md)

Layout with collapsable side navigation panel

## Props:
- `items` `Array of <Object>` **required**: array of item objects (see below)
- `children` **optional**: current loading state

## Item:
- `label` `<String>`: the text displayed in the link
- `icon` `<Component>`: Material-UI icon component
- `to` `<String>`: internal route string (e.g. `/foo`)
- `component` `<Component>`: React component to route to

## Auto-Generation of Routes
The `<LayoutSidenav items={routes} />` component will auto-generate a page router to simplify layout
generation under the following conditions:
1. At least one of the items must contain a `to` and a `component` (to create the route/destination)
1. No children are supplied.  For example, the following code will render the child `Page`, rather than override
with the auto-generated router:
```js
  <LayoutSidenav items={someItems}>
    <Page>
      foo
    </Page>
  <LayoutSidenav>
```

## Example (Auto-Generation):
```js
import React from 'react'
import { LayoutSidenav, LoremIpsum, Page } from '@arundo/react-shell'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const Foo = () => <Page>Bar</Page>

export const App = () => {
  const items = [
    {
      label: 'Lorem Ipsum',
      // icon: MailIcon, // no icon will be displayed
      component: LoremIpsum,
      to: '/foo',
    },
    {
      label: 'Foo',
      icon: InboxIcon,
      component: Foo,
      to: '/foo',
    },
    {
      label: 'Log Something',
      icon: MailIcon,
      onClick: () => console.log('got it'), // additional props will be passed down
    },
  ]

  return (
    <LayoutSidenav items={items}></LayoutSidenav>
  )
}
```

## Example (Manual Routing):
```js
import React from 'react'
import { LayoutSidenav, LoremIpsum, Page } from '@arundo/react-shell'
import { Router } from '@reach/router'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const Foo = () => <Page>Bar</Page>

export const App = () => {
  const items = [
    {
      label: 'Lorem Ipsum',
      // icon: MailIcon, // no icon will be displayed
      component: LoremIpsum,
      to: '/',
    },
    {
      label: 'Foo',
      icon: InboxIcon,
      component: Foo,
      to: '/foo',
    },
    {
      label: 'Log Something',
      icon: MailIcon,
      onClick: () => console.log('got it'), // additional props will be passed down
    },
  ]

  return (
    <LayoutSidenav items={items}>
      <Router>
        <LoremIpsum path="/" />
        <Bar path="/bar" />
      </Router>

      <p>Some footnote that will render regardless of route</p>
    </LayoutSidenav>
  )
}
```
