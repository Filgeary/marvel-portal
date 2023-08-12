import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import comicResponseJson from '../__fixtures/api/comicById.json'
import ComicProfile from '../components/ComicProfile'
import NotFound404 from '../components/_shared/NotFound404'
import AppLayout from '../layout/AppLayout'
import CharactersPage from '../pages/CharactersPage'
import ComicsPage from '../pages/ComicsPage'
import HomePage from '../pages/HomePage'

/**
 * @type {import('../types/IComic').IComicDataWrapper}
 */
const comicResponseObj = JSON.parse(JSON.stringify(comicResponseJson))
const comic = comicResponseObj?.data?.results?.at(0)

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <div className='container'>
          <ComicProfile comic={comic} />
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
