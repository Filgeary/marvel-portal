import React from 'react'
import comicsResponseJSON from '../__fixtures/api/comics.json'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import ComicsBanner from '../components/ComicsBanner'
import ComicsList from '../components/ComicsList'
import ErrorBoundary from '../components/_shared/ErrorBoundary'
import CharListContainer from '../containers/CharListContainer'
import RandomCharContainer from '../containers/RandomCharContainer'
import styles from './App.module.css'

/**
 * @type {import('../types/IComic').IComicDataWrapper}
 */
const comicsResponseObj = JSON.parse(JSON.stringify(comicsResponseJSON))
const comicsList = comicsResponseObj.data?.results

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main className={styles.main}>
        <div className='container d-grid gap-5'>
          <ComicsBanner />
          <ComicsList
            comicsList={comicsList}
            onLoadMore={() => {}}
            isLoading={false}
            hasMoreComics={true}
          />
        </div>

        <ErrorBoundary>
          <RandomCharContainer />
        </ErrorBoundary>

        <ErrorBoundary>
          <CharListContainer />
        </ErrorBoundary>
      </main>

      <AppFooter />
    </div>
  )
}

export default App
