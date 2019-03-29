import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import { useAuth } from '@arundo/react-auth'
import './ProfileLink.scss'

export const ProfileLink = () => {
  let { user, isLoggedIn, loginAction, logoutAction } = useAuth()
  let [ anchor, setAnchor ] = useState()
  let closeMenu = () => setAnchor(undefined)
  let isOpen = !!anchor

  return (
    <div className="profile">
      <Button
        aria-owns={open ? 'menu-appbar' : undefined}
        aria-haspopup="true"
        onClick={(e) => setAnchor(e.currentTarget)}
        color="inherit"
        className="profile-link"
      >
        {
          user && (
            user.picture
            ? <img src={user.picture} className="icon" />
            : user.name
          )
        }

        <ExpandMoreIcon />
      </Button>

      <Menu
        id="menu-appbar"
        anchorEl={anchor}
        open={isOpen}
        onClose={closeMenu}
      >
        {/*<MenuItem onClick={closeMenu}>My Profile</MenuItem>*/}
        <MenuItem onClick={logoutAction}>Log Out</MenuItem>
      </Menu>
    </div>
  )
}
