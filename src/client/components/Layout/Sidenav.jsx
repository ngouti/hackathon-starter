import React, { useState } from 'react'
import { useStore } from '@kwhitley/use-store'
import classNames from 'classnames'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { NavItem } from './NavItem'

import './Sidenav.scss'

export const Sidenav = ({ items, className, ...props }) => {
  let [ isOpen, setIsOpen ] = useStore('sidenavIsOpen', true, { persist: true })

  return (
    <Drawer
      variant="permanent"
      className={classNames('drawer', isOpen ? 'open' : 'closed')}
      open={isOpen}
    >
      <div className={classNames('opener', isOpen ? 'open' : 'closed')}>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          { isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List className="list">
        {
          items.map((item, index) => (
            <NavItem key={index} item={item} />
          ))
        }
      </List>
    </Drawer>
  )
}
