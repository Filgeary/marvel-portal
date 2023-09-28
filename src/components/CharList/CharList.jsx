import React, { createRef, useEffect, useRef, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { IMAGE_VARIANT } from '../../constants'
import { transformCharacter } from '../../utils/apiAdapter'
import { FadeInUp, FadeInZoomIn } from '../_shared/Animations'
import styles from './CharList.module.css'

/**
 * @param {object} props
 * @param {import('../../types/ICharacter').ICharacter[] | null | undefined} props.charList
 * @param {(id: number | undefined) => void} props.onSelectChar
 * @param {() => void} props.onLoadMore
 * @param {boolean} props.isLoading
 * @param {boolean} props.hasMoreChars
 */
const CharList = ({ charList, onSelectChar, onLoadMore, isLoading, hasMoreChars }) => {
  const listRef = useRef(null)
  const [isShowList, setIsShowList] = useState(false)
  // for animations
  useEffect(() => {
    setIsShowList(Boolean(charList?.length))
    return () => setIsShowList(false)
  }, [charList?.length])

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

      {/* @ts-ignore */}
      <FadeInZoomIn
        in={isShowList}
        ref={listRef}
      >
        <ul
          data-testid='charListUList'
          className={styles.list}
          ref={listRef}
        >
          <TransitionGroup component={null}>
            {transformedCharList?.map(char => {
              const { id, name, thumbnail } = char ?? {}
              const nodeRef = createRef()

              return (
                /* @ts-ignore */
                <FadeInUp
                  key={id}
                  ref={nodeRef}
                >
                  <li
                    ref={nodeRef}
                    data-testid='charListItem'
                    className={styles.listItem}
                  >
                    <button
                      type='button'
                      className={styles.listItemButton}
                      onClick={() => onSelectChar(id)}
                    >
                      <img
                        data-testid='charListItemImage'
                        loading='lazy'
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
                </FadeInUp>
              )
            })}
          </TransitionGroup>
        </ul>
      </FadeInZoomIn>

      {hasMoreChars ? (
        <button
          type='button'
          className={'btn btn-primary btn-shadow-light m-auto'}
          onClick={onLoadMore}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      ) : (
        <h3 style={{ color: 'white' }}>No More Characters!</h3>
      )}
    </section>
  )
}

export default CharList
