import React from 'react'
import { useAuth } from '@arundo/react-auth/hooks'
import './ProfileLink.scss'
import Typography from '@material-ui/core/Typography'

export const ProfileLink = ({ user }) => {
  return (
    <div className="profile-link">
      <img src={user.picture} className="icon" />

      <Typography variant="inherit" color="inherit">
        { user.name }
      </Typography>
    </div>
  )
}
