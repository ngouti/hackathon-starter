import React from 'react'
import { Link } from '@reach/router'
import { useAuth } from '../../hooks'
import { ProfileLink } from './ProfileLink'
import './Header.scss'
import * as logo from '../../images/arundo-logo.svg'

export const Header = () => {
  let { user, isLoggedIn } = useAuth()

  return (
    <header>
      <img className="logo" src={logo} />

      <nav>
        { user && <ProfileLink user={user} />}
        {
          isLoggedIn
          ? <Link to="/auth/logout">Log Out</Link>
          : <Link to="/auth/login">Log In</Link>
        }
      </nav>
    </header>
  )
}
