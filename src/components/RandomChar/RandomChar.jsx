import React from 'react'
import { IMAGE_VARIANT } from '../../constants'
import { transformCharacter } from '../../utils/apiAdapter'
import styles from './RandomChar.module.css'

/**
 * @param {object} props
 * @param {import('../../types/ICharacter').ICharacter | null | undefined} props.char
 */
const RandomChar = ({ char }) => {
  const { name, description, thumbnail } =
    transformCharacter(char, IMAGE_VARIANT['250x250'], false) ?? {}

  return (
    <section className={styles.charSection}>
      <figure>
        <img
          data-testid='randomChar-thumbnail'
          src={thumbnail}
          alt={name}
          width={250}
          height={250}
        />
      </figure>

      <div className='d-flex flex-column flex-grow-1 w-60 gap-2 p-2'>
        <h2
          data-testid='randomCharTitle'
          className={styles.charTitle}
        >
          {name}
        </h2>
        <p data-testid='randomChar-description'>{description}</p>
      </div>
    </section>
  )
}

export default RandomChar
