import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Link } from '@reach/router'

const isActive = ({ isCurrent }) => {
  console.log('isCurrent', isCurrent)
  return isCurrent ? { className: 'active' } : null
}

const NavLink = ({ children, icon, ...props }) =>
  <Link getProps={isActive} {...props}>{ children }</Link>

export const SidenavItem = ({ item }) => {
  let { icon, name, ...props } = item

  console.log('creating nav', item)

  return (
    <NavLink {...props}>
      <ListItem button>
        <ListItemIcon>{ icon }</ListItemIcon>
        <ListItemText><span className="link-text">{ name }</span></ListItemText>
      </ListItem>
    </NavLink>
  )
}
