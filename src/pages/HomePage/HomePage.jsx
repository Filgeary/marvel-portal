import React from 'react'
import ErrorBoundary from '../../components/_shared/ErrorBoundary'
import RandomCharContainer from '../../containers/RandomCharContainer'
// import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <ErrorBoundary>
      <RandomCharContainer />
    </ErrorBoundary>
  )
}

export default HomePage
