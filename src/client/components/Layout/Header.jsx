import React from 'react'
import { Link } from '@reach/router'
import { useAuth } from '../../hooks'
import { ProfileLink } from './ProfileLink'
import './Header.scss'
import * as logo from '../../images/arundo-logo.svg'
import auth from '../../utils/auth'

export const Header = () => {
  let { user, isLoggedIn, loginAction, logoutAction } = useAuth()

  return (
    <header>
      <img className="logo" src={logo} />

      <nav>
        { user && <ProfileLink user={user} />}
        {
          isLoggedIn
          ? <a onClick={logoutAction}>Log Out</a>
          : <a onClick={loginAction}>Log In</a>
        }
      </nav>
    </header>
  )
}
