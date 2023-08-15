import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'

const HomePage = lazy(() => import('../pages/HomePage'))
const CharactersPage = lazy(() => import('../pages/CharactersPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))
const NotFound404 = lazy(() => import('../components/_shared/NotFound404'))

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
