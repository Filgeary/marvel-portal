import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound404 from '../components/_shared/NotFound404'
import AppLayout from '../layout/AppLayout'
import CharactersPage from '../pages/CharactersPage'
import ComicsPage from '../pages/ComicsPage'
import HomePage from '../pages/HomePage'
import SingleComicPage from '../pages/SingleComicPage'

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />

        <Route
          path='/characters'
          element={<CharactersPage />}
        />

        <Route
          path='/comics'
          element={<ComicsPage />}
        />
        <Route
          path='/comics/:id'
          element={<SingleComicPage />}
        />

        <Route
          path='*'
          element={<NotFound404 />}
        />
      </Routes>
    </AppLayout>
  )
}

export default App
