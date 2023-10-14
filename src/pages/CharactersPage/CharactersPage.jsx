import React, { useState } from 'react'
import CharInfo from '../../components/CharInfo'
import ErrorBoundary from '../../components/_shared/ErrorBoundary'
import CharListContainer from '../../containers/CharListContainer'
import styles from './CharactersPage.module.css'

const CharactersPage = () => {
  const [selectedChar, setSelectedChar] = useState(null) // TODO: add types

  return (
    <div className='container d-grid align-items-start gap-4'>
      <h1 className='text-gradient line-height-1'>Characters</h1>

      <div className={styles.wrapper}>
        <ErrorBoundary>
          <CharListContainer
            onSelectChar={char => setSelectedChar(char)}
            shouldFilterWithImages={true}
          />
        </ErrorBoundary>

        <CharInfo char={selectedChar} />
      </div>
    </div>
  )
}

export default CharactersPage
