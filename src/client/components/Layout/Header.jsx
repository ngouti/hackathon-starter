import React, { useState } from 'react'
import { useAuth, axios } from '@arundo/react-auth'
import { ProfileLink } from './ProfileLink'
import './Header.scss'
import logo from '../../images/arundo-logo-white.svg'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'

export const Header = () => {
  let { user, isLoggedIn, loginAction, logoutAction } = useAuth()
  let [ anchor, setAnchor ] = useState()
  let closeMenu = () => setAnchor(undefined)
  let isOpen = !!anchor

  return (
    <AppBar position="static" className="header">
      <Toolbar variant="dense" className="toolbar">
        <img className="logo" src={logo} />

        { isLoggedIn && (
              <div className="profile">
                <Button
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={(e) => setAnchor(e.currentTarget)}
                  color="inherit"
                >
                  { user && <ProfileLink user={user} /> }
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={isOpen}
                  onClose={closeMenu}
                >
                  {/*<MenuItem onClick={closeMenu}>My Profile</MenuItem>*/}
                  <MenuItem onClick={logoutAction}>Log Out</MenuItem>
                </Menu>
              </div>
            )}

        { !isLoggedIn && <Button color="inherit" onClick={loginAction}>Login</Button> }
      </Toolbar>
    </AppBar>
  )
}

