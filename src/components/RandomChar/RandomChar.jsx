import React from 'react'
import { Link } from 'react-router-dom'
import { IMAGE_VARIANT } from '../../constants'
import { transformCharacter } from '../../utils/apiAdapter'
import styles from './RandomChar.module.css'

/**
 * @param {object} props
 * @param {import('../../types/ICharacter').ICharacter | null | undefined} props.char
 */
const RandomChar = ({ char }) => {
  const { id, name, description, thumbnail } =
    transformCharacter(char, IMAGE_VARIANT['250x250'], false) ?? {}

  return (
    <Link
      to={`/characters/${id}`}
      className={styles.charLink}
    >
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

      <div className={styles.overlay}>
        <p>Go To Character Page</p>
      </div>
    </Link>
  )
}

export default RandomChar
