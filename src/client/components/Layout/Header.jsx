import React from 'react'
import { Link } from '@reach/router'
import './Header.scss'
import * as logo from '../../images/arundo-logo.svg'

export const Header = () =>
  <header>
    <img className="logo" src={logo} />

    <nav>
      <Link to="/somewhere">Page1</Link>
      <a href="/login">Log In</a>
    </nav>
  </header>
