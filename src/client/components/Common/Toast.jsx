import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

export const Toast = ({ message }) => {
  let [ isOpen, setIsOpen ] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 1000)
  }, [])

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isOpen}
      autoHideDuration={4000}
      onClose={() => setIsOpen(false)}
      message={message}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className="close"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}
