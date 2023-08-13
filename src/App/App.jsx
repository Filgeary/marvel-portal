import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound404 from '../components/_shared/NotFound404'
import ComicProfileContainer from '../containers/ComicProfileContainer'
import AppLayout from '../layout/AppLayout'
import CharactersPage from '../pages/CharactersPage'
import ComicsPage from '../pages/ComicsPage'
import HomePage from '../pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <div className='container'>
          <ComicProfileContainer id={95790} />
        </div>

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
            path='*'
            element={<NotFound404 />}
          />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
