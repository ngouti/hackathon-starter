import React from 'react'
import classNames from 'classnames'
import { Router, Link } from '@reach/router'
import { useAuth } from '../auth'
import styled from 'styled-components'
import '../styles/app.scss'

const CenteredDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2em 2em 5em;
  font-size: 4vmax;

  em {
    color: pink;
    font-style: normal;
    font-size: 1.3em;
    display: block;
  }
`

const StyledPre = styled.pre`
  font-size: 0.8em;
  background-color: #eee;
  padding: 1em;
  max-width: 75%;
`

const LoginLogout = styled.a`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export default function App() {
  let { user, loginAction, logoutAction, isLoggedIn } = useAuth()

  return (
    <CenteredDiv>
      <p>Welcome to the Arundo <em>Women's 2019 Hackathon</em></p>

      {
        isLoggedIn
        ? <LoginLogout onClick={logoutAction}>Logout</LoginLogout>
        : <LoginLogout onClick={loginAction}>Login</LoginLogout>
      }
    </CenteredDiv>
  )
}
