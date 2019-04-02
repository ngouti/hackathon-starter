import React from 'react'
import classNames from 'classnames'
import { LayoutVertical, LayoutSidenav, Page, Sidenav, SidenavItem, LoremIpsum } from './Layout'
import { Router } from '@reach/router'
import { useStore } from '@kwhitley/use-store'

import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import { Dan } from './Pages/Dan'

const Bar = () => <Page centeredMessage><h1>Bar</h1></Page>

const Test = () => <Page centeredMessage><h1>Test View</h1></Page>

export default function App() {
  const [ counter, setCounter ] = useStore('counter', 0, { persist: true })

  const items = [
    {
      label: 'No Icon',
      // icon: MailIcon,
      component: LoremIpsum,
      to: '/foo',
    },
    {
      label: 'Bar',
      icon: InboxIcon,
      component: Bar,
      to: '/bar',
    },
    {
      label: 'Test View',
      icon: InboxIcon,
      component: Test,
      to: '/test',
    },
    {
      label: 'Dan',
      icon: InboxIcon,
      component: Dan,
      to: '/dan',
    },
    {
      label: 'Counter++',
      icon: InboxIcon,
      onClick: () => setCounter(counter + 1),
    },
  ]

  return (
    <Router>
      <LayoutSidenav items={items} path="/*" />
      <Test path="/test" />
    </Router>
  )
}
