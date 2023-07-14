import React from 'react'
import { IMAGE_VARIANT } from '../../constants'
import { transformCharacter } from '../../utils/apiAdapter'
import ExternalLink from '../_shared/ExternalLink'
import styles from './CharInfo.module.css'

/**
 * @param {object} props
 * @param {import('../../types/ICharacter').ICharacter | null | undefined} props.char
 */
const CharInfo = ({ char }) => {
  if (!char) {
    return (
      <h2>
        <mark className='px-05'>No Selected Char</mark>
      </h2>
    )
  }

  const { name, description, thumbnail, externalLinks, comics } =
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
          <h2 className='text-upper'>{name}</h2>
          <div className='d-flex gap-1 justify-space-between'>
            {externalLinks?.map(({ url, type }, idx) => (
              <ExternalLink
                key={idx}
                href={url}
                label={type}
              />
            ))}
          </div>
        </div>
      </header>

      <p data-testid='charInfo-description'>{description}</p>

      <section className='p-0 d-flex flex-column gap-1'>
        <div className='d-flex justify-space-between align-items-center gap-1'>
          <h3>Comics:</h3>
          {comics?.items?.length ? (
            <small>{`Shown ${comics?.returned} from ${comics?.available}`}</small>
          ) : null}
        </div>

        {comics?.items?.length ? (
          <ul>
            {comics?.items?.map(({ name, resourceURI }) => (
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
