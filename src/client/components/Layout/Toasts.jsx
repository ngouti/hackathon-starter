import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Close } from '@material-ui/icons'

const CloseButton = ({ YouCanPassAnyProps, closeToast }) => <Close />

export const Toasts = () => {
  return (
    <ToastContainer
      closeButton={<CloseButton />}
      autoClose={5000}
      />
  )
}
