import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export const AppProvider = ({ children }) => {
  // prettier-ignore
  return (
      <BrowserRouter>
        {children}
      </BrowserRouter>
    )
}
