import React, { useState } from 'react'
import List from '@material-ui/core/List'
import { NavItem } from './NavItem'

import './Topnav.scss'

export const Topnav = ({ items, className, ...props }) => {
  return (
    <List className="list topnav">
      {
        items.map((item, index) => (
          <NavItem key={index} item={item} icon={false} />
        ))
      }
    </List>
  )
}
