import cn from 'clsx'
import React from 'react'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import CharInfo from '../components/CharInfo'
import CharList from '../components/CharList'
import RandomChar from '../components/RandomChar'
import { marvelService } from '../services/marvelService'
import styles from './App.module.css'

// TODO: only for check
marvelService
  .getAllChars({ limit: 9, offset: 260 })
  .then(res => console.table(res.data.results))
  .catch(err => console.error(err))

marvelService
  .getCharacter(1010823)
  .then(res => console.table(res.data?.results))
  .catch(err => console.error(err))

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main className={styles.main}>
        <RandomChar />

        <div className={cn('container', styles.charListWrapper)}>
          <CharList />
          <CharInfo />
        </div>
      </main>

      <AppFooter />
    </div>
  )
}

export default App
