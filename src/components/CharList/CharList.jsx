import React from 'react'
import { IMAGE_VARIANT } from '../../constants'
import { transformCharacter } from '../../utils/apiAdapter'
import styles from './CharList.module.css'

/**
 * @param {object} props
 * @param {import('../../types/ICharacter').ICharacter[] | null | undefined} props.charList
 * @param {Function} props.onSelectChar
 * @param {() => void} props.onLoadMore
 */
const CharList = ({ charList, onSelectChar, onLoadMore }) => {
  const transformedCharList = charList?.map(char =>
    transformCharacter(char, IMAGE_VARIANT['200x200']),
  )

  if (!transformedCharList?.length) {
    return (
      <h2>
        <mark className='px-05'>Characters not found!</mark>
      </h2>
    )
  }

  return (
    <section className={styles.section}>
      <h2 className='visually-hidden'>Characters List</h2>

      <ul className={styles.list}>
        {transformedCharList?.map(char => {
          const { id, name, thumbnail } = char ?? {}

          return (
            <li
              key={id}
              data-testid='charListItem'
              className={styles.listItem}
            >
              <button
                type='button'
                onClick={() => onSelectChar(id)}
              >
                <img
                  data-testid='charListItemImage'
                  src={thumbnail}
                  alt={name}
                  width={200}
                  height={200}
                />
                <div className={styles.charNameWrapper}>
                  <h3>{name}</h3>
                </div>
              </button>
            </li>
          )
        })}
      </ul>

      <button
        type='button'
        className='btn btn-primary btn-shadow-light m-auto'
        onClick={onLoadMore}
      >
        Load More
      </button>
    </section>
  )
}

export default CharList
