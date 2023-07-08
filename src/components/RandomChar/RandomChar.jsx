import React from 'react'
import { ExternalLink } from 'react-feather'
import { IMAGE_VARIANT } from '../../constants'
import { transformCharacter } from '../../utils/apiAdapter'
import styles from './RandomChar.module.css'

/**
 * @param {object} props
 * @param {import('../../types/ICharacter').ICharacter | null | undefined} props.char
 */
const RandomChar = ({ char }) => {
  const { id, name, description, thumbnail, externalLinks } =
    transformCharacter(char, IMAGE_VARIANT) ?? {}

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
          {externalLinks?.map((link, idx) => {
            const { url, type } = link

            return (
              <a
                key={idx}
                href={url}
                target='_blank'
                rel='noreferrer noopener'
                className='link'
              >
                <span className='d-flex gap-03'>
                  {type?.toUpperCase()} <ExternalLink size={20} />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RandomChar
