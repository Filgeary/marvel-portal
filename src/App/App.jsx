import React from 'react'
import AppLayout from '../layout/AppLayout'
import CharactersPage from '../pages/CharactersPage'
import ComicsPage from '../pages/ComicsPage'
import HomePage from '../pages/HomePage'

const App = () => {
  return (
    <AppLayout>
      <ComicsPage />
      <HomePage />
      <CharactersPage />
    </AppLayout>
  )
}

export default App
