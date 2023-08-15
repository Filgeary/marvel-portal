import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Spinner from '../components/_shared/Spinner'

export const AppProvider = ({ children }) => {
  const ScreenSpinner = () => (
    <div className='w-100 h-screen d-flex align-items-center'>
      <Spinner />
    </div>
  )

  return (
    <Suspense fallback={<ScreenSpinner />}>
      <BrowserRouter>{children}</BrowserRouter>
    </Suspense>
  )
}
