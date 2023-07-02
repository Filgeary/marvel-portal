import cn from 'clsx'
import React from 'react'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import CharInfo from '../components/CharInfo'
import CharList from '../components/CharList'
import RandomChar from '../components/RandomChar'
import { marvelService } from '../services/marvelService'
import { transformCharacter } from '../utils/apiAdapter'
import styles from './App.module.css'

// TODO: remove later api examples
marvelService
  .getAllChars({ limit: 18, offset: 560 })
  .then(res => console.table(res.data?.results?.map(transformCharacter)))
  .catch(err => console.error(err))

marvelService
  .getCharacter(1011299)
  .then(res => console.table(res.data?.results?.map(transformCharacter)))
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
