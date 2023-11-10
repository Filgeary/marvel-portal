import React from 'react'
import { IMAGE_VARIANT } from '../../constants'
import { transformCharacter } from '../../utils/apiAdapter'
import styles from './CharacterProfile.module.css'

/**
 * @param {object} props
 * @param {import('../../types/ICharacter').ICharacter | null | undefined} props.character
 */
const CharacterProfile = ({ character }) => {
  if (!character) return <h2>No Character!</h2>

  const { name, thumbnail, description } =
    transformCharacter(character, IMAGE_VARIANT['300x450']) ?? {}

  return (
    <article
      data-testid='characterProfile'
      className='p-3 d-grid align-items-start gap-5'
    >
      <div className={styles.wrapper}>
        <figure>
          <img
            src={thumbnail}
            alt={name}
            width={300}
            height={450}
          />
        </figure>

        <section className='d-flex flex-column gap-4 h-100 p-0 px-2 font-light'>
          <h2 className='text-gradient f-size-250'>{name}</h2>
          <p>{description}</p>
        </section>
      </div>

      <hr
        style={{ width: '60%', background: 'var(--cra-bg-grey)', border: 'none', height: '2px' }}
      />
    </article>
  )
}

export default CharacterProfile
