import cn from 'clsx'
import React from 'react'
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
    <div className={cn('container', styles.wrapper)}>
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

        <div className='d-flex flex-column flex-grow-1 w-60 justify-space-between gap-1 p-2'>
          <h2
            data-testid='randomCharTitle'
            className={styles.charTitle}
          >
            {name}
          </h2>
          <p>{description}</p>

          <div className='d-flex gap-1 justify-space-between align-items-end'>
            {externalLinks?.map((link, idx) => {
              return (
                <a
                  key={idx}
                  href={link.url}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  {link.type?.toUpperCase() + ' ↗️'}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>
          Random character for today! <br /> Do you wanna know them better?
        </h2>

        <div>
          <h3 className='mb-2'>Or choose another one</h3>
          <button
            type='button'
            className='btn btn-primary btn-shadow-light'
          >
            Try It!
          </button>
        </div>
        <div
          className={styles.bgImageShield}
          role='img'
          aria-label='Captain America Shield'
        ></div>
      </section>
    </div>
  )
}

export default RandomChar
