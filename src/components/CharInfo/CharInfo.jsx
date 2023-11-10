import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_VARIANT } from '../../constants'
import { transformCharacter } from '../../utils/apiAdapter'
import Skeleton from '../_shared/Skeleton'
import styles from './CharInfo.module.css'

/**
 * @param {object} props
 * @param {import('../../types/ICharacter').ICharacter | null | undefined} props.char
 */
const CharInfo = ({ char }) => {
  if (!char) {
    return (
      <section className='d-grid align-items-start sticky top-1 p-0'>
        <h2 style={{ paddingLeft: '1.5rem', color: 'var(--cra-font-light)' }}>
          Select a Character, please
        </h2>
        <Skeleton />
      </section>
    )
  }

  const { id, name, description, thumbnail, comics } =
    transformCharacter(char, IMAGE_VARIANT['200x200']) ?? {}

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <figure>
          <img
            src={thumbnail}
            alt={name}
            width={200}
            height={200}
          />
        </figure>

        <div className='d-flex flex-column justify-space-between gap-1'>
          <h2
            data-testid='charInfo-charTitle'
            className='text-upper'
          >
            {name}
          </h2>
        </div>
      </header>

      <Link
        to={`/characters/${id}`}
        className='btn btn-primary btn-shadow-dark'
      >
        Go to Character Page
      </Link>

      <p data-testid='charInfo-description'>{description}</p>

      <section className='p-0 d-flex flex-column gap-1'>
        <div className='d-flex justify-space-between align-items-center gap-1'>
          <h3>Comics:</h3>
          {comics?.items?.length ? (
            <small>{`Shown ${Math.min(comics?.returned ?? 0, 10)} from ${
              comics?.available
            }`}</small>
          ) : null}
        </div>

        {comics?.items?.length ? (
          <ul>
            {comics?.items?.slice(0, 10).map(({ name, resourceURI }) => (
              <li
                data-testid='charInfo-listItemComic'
                key={resourceURI}
              >
                {name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No Comics</p>
        )}
      </section>
    </article>
  )
}

export default CharInfo
