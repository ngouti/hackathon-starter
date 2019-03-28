import React from 'react'
import { useAuth } from '@arundo/react-auth/hooks'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './ProfileLink.scss'

export const ProfileLink = ({ user }) => {
  return (
    <React.Fragment>
      {
        user.picture
        ? <img src={user.picture} className="icon" />
        : user.name
      }

      <ExpandMoreIcon />
    </React.Fragment>
  )
}
