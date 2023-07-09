import React from 'react'
import { IMAGE_VARIANT } from '../../constants'
import { transformCharacter } from '../../utils/apiAdapter'
import ExternalLink from '../_shared/ExternalLink'
import styles from './RandomChar.module.css'

/**
 * @param {object} props
 * @param {import('../../types/ICharacter').ICharacter | null | undefined} props.char
 */
const RandomChar = ({ char }) => {
  const { id, name, description, thumbnail, externalLinks } =
    transformCharacter(char, IMAGE_VARIANT['250x250']) ?? {}

  return (
    <section className={styles.charSection}>
      <figure className='relative'>
        <img
          src={thumbnail}
          alt={name}
          width={250}
          height={250}
        />
        <small className='absolute top-0 right-0'>{id}</small>
      </figure>

      <div className='d-flex flex-column flex-grow-1 w-60 justify-space-between gap-1 p-2 pb-1'>
        <h2
          data-testid='randomCharTitle'
          className={styles.charTitle}
        >
          {name}
        </h2>
        <p>{description}</p>

        <div className='d-flex gap-1 justify-space-between align-items-end'>
          {externalLinks?.map(({ url, type }, idx) => (
            <ExternalLink
              key={idx}
              href={url}
              label={type}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RandomChar
