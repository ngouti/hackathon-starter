import React from 'react'
import { Link } from '@reach/router'

export default function Header() {
  return (
    <header>
      <div className="title">Arundo</div>

      <nav>
        <Link to="/somewhere">Page1</Link>
        <a href="/login">Log In</a>
      </nav>
    </header>
  )
}
