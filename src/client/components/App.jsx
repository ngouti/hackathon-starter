import React from 'react'
import { Router, navigate } from '@reach/router'

import { MissingPage } from './Common/MissingPage'
import { Header } from './Layout/Header'
import { Footer } from './Layout/Footer'
import { Page } from './Layout/Page'
import Somewhere from './Pages/Somewhere'
import Login from './Pages/Login'
import Logout from './Pages/Logout'
import Home from './Pages/Home'

export default function App() {
  return (
    <div className="page-content">
      <Header />

      <Router>
        <Login path="auth/login" />
        <Logout path="auth/logout" />
        <Somewhere path="somewhere" />
        <Home path="/" />
        <MissingPage default />
      </Router>

      <Footer />
    </div>
  )
}
