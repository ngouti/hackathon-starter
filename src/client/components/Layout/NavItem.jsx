import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Link } from '@reach/router'
import { Div } from './Div'

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : null
}

const NavLink = ({
  children,
  component,
  icon,
  ...props
}) =>
  <Link getProps={isActive} {...props}>{ children }</Link>


export const NavItem = ({
  className,
  item,
  icon = true
}) => {
  let { icon: Icon, label, ...props } = item
  let Component = item.to ? NavLink : Div

  return (
    <Component {...props}>
      <ListItem className="item" button>
        { Icon && icon && <ListItemIcon><Icon /></ListItemIcon> }
        <ListItemText><span className="link-text">{ label }</span></ListItemText>
      </ListItem>
    </Component>
  )
}
