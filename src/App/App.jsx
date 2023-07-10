import cn from 'clsx'
import React from 'react'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import CharInfo from '../components/CharInfo'
import CharList from '../components/CharList'
import RandomCharContainer from '../containers/RandomCharContainer'
import styles from './App.module.css'

import allCharsResponseJSON from '../__fixtures/api/allCharacters.json'

/**
 * @type {import('../types/ICharacter').ICharacterDataWrapper}
 */
const allCharsResponseObj = JSON.parse(JSON.stringify(allCharsResponseJSON))
const charList = allCharsResponseObj.data?.results

const App = () => {
  return (
    <div className={styles.wrapper}>
      <AppHeader />

      <main className={styles.main}>
        <RandomCharContainer />

        <div className={cn('container', styles.charListWrapper)}>
          <CharList
            charList={charList}
            onClickCharCard={uri => console.log(uri)}
            onLoadMore={() => {}}
          />
          <CharInfo />
        </div>
      </main>

      <AppFooter />
    </div>
  )
}

export default App
