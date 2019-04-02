import React from 'react'
import classNames from 'classnames'
import { LayoutVertical, Page, Sidenav, SidenavItem, LoremIpsum } from './Layout'
import { Router } from '@reach/router'
import { useStore } from '@kwhitley/use-store'

import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import { Dan } from './Pages/Dan'

const Bar = () => <Page centeredMessage><h1>Bar</h1></Page>

export default function App() {
  const [ counter, setCounter ] = useStore('counter', 0)

  const routes = [
    {
      name: 'Foo',
      icon: MailIcon,
      component: LoremIpsum,
      to: '/foo',
    },
    {
      name: 'Bar',
      icon: InboxIcon,
      component: Bar,
      to: '/bar',
    },
    {
      name: 'Dan',
      icon: InboxIcon,
      component: Dan,
      to: '/dan',
    },
    {
      name: 'Counter++',
      icon: InboxIcon,
      onClick: () => setCounter(counter + 1),
    },
  ]

  return (
    <LayoutVertical navigation={routes}>
      <LoremIpsum />
    </LayoutVertical>
  )
}
