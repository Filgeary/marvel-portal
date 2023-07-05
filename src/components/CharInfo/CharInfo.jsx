import React from 'react'
import styles from './CharInfo.module.css'

const CharInfo = () => {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <figure className={styles.figureCharAvatar}>
          <img
            src='https://images.placeholders.dev/?width=150&height=150&bgColor=%231e90ff'
            alt='CharInfo avatar'
            width={150}
            height={150}
            className='flex-grow-1'
          />
        </figure>

        <div className='d-flex flex-column justify-space-between gap-1'>
          <h2 className='text-upper'>Char Info</h2>
          <div className='d-flex gap-1 justify-space-between'>
            <a
              href='#charInfo'
              className='btn btn-primary'
            >
              Char Info
            </a>
            <a
              href='#charWiki'
              className='btn btn-secondary'
            >
              Char Wiki
            </a>
          </div>
        </div>
      </header>

      {/* cspell: disable */}
      <p data-testid='charInfo-description'>
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and
        Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the
        father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the
        father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave
        birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is
        referred to as the father of Váli in the Prose Edda.
      </p>
      {/* cspell: enable */}

      <section className='p-0'>
        <h3 className='mb-1'>Comics:</h3>
        <ul>
          <li>All-Winners Squad: Band of Heroes (2011) #3</li>
          <li>All-Winners Squad: Band of Heroes (2011) #3</li>
          <li>All-Winners Squad: Band of Heroes (2011) #3</li>
        </ul>
      </section>
    </article>
  )
}

export default CharInfo
