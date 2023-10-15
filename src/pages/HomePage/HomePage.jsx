import React from 'react'
import WelcomeMessage from '../../components/WelcomeMessage'
import WelcomeScreenLinks from '../../components/WelcomeScreenLinks'
import ErrorBoundary from '../../components/_shared/ErrorBoundary'
import RandomCharContainer from '../../containers/RandomCharContainer'
// import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <>
      <WelcomeMessage />

      <ErrorBoundary>
        <RandomCharContainer />
      </ErrorBoundary>

      <WelcomeScreenLinks />
    </>
  )
}

export default HomePage
