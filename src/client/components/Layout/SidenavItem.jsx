import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Link } from '@reach/router'
import { Div } from './Div'

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : null
}

const NavLink = ({ children, icon, component, ...props }) =>
  <Link getProps={isActive} {...props}>{ children }</Link>

export const SidenavItem = ({ item }) => {
  let { icon: Icon, name, ...props } = item
  let Component = item.to ? NavLink : Div

  return (
    <Component {...props}>
      <ListItem button>
        <ListItemIcon><Icon /></ListItemIcon>
        <ListItemText><span className="link-text">{ name }</span></ListItemText>
      </ListItem>
    </Component>
  )
}
