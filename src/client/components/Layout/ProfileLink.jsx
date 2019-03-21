import React from 'react'
import { Link } from '@reach/router'
import { useAuth } from '@arundo/react-auth/hooks'
import './ProfileLink.scss'
import * as logo from '../../images/arundo-logo.svg'

export const ProfileLink = ({ user }) => {
  return (
    <div className="profile-link">
      <img src={user.picture} className="icon" />
      { user.name }
    </div>
  )
}
