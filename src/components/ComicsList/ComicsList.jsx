import React from 'react'
import { IMAGE_VARIANT } from '../../constants'
import { transformComic } from '../../utils/apiAdapter'
import styles from './ComicsList.module.css'

/**
 * @param {object} props
 * @param {import('../../types/IComic').IComic[] | null | undefined} props.comicsList
 * @param {() => void} props.onLoadMore
 * @param {boolean} props.isLoading
 * @param {boolean} props.hasMoreComics
 */
const ComicsList = ({ comicsList, onLoadMore, isLoading, hasMoreComics }) => {
  const transformedComicsList = comicsList?.map(comic =>
    transformComic(comic, IMAGE_VARIANT['216x324']),
  )

  if (!transformedComicsList?.length) {
    return (
      <h2>
        <mark className='px-05'>Comics not found!</mark>
      </h2>
    )
  }

  return (
    <section className={styles.section}>
      <h2 className='visually-hidden'>Comics List</h2>

      <ul className={styles.list}>
        {transformedComicsList.map(comic => {
          const { id, title, thumbnail, onsaleDate, printPrice } = comic ?? {}

          return (
            <li
              key={id}
              data-testid='comicsListItem'
              className={styles.listItem}
            >
              <a
                href={`/comics/${id}`}
                className={styles.listLink}
              >
                <figure className='overflow-hidden'>
                  <img
                    data-testid='comicsListItemImage'
                    loading='lazy'
                    src={thumbnail}
                    alt={title}
                    width={216}
                    height={324}
                  />
                </figure>

                <div className='d-flex flex-column text-center p-1'>
                  <h3 className={styles.title}>{title}</h3>
                  <small className={styles.onsaleDate}>{onsaleDate}</small>
                  <small className={styles.printPrice}>{printPrice}</small>
                </div>
              </a>
            </li>
          )
        })}
      </ul>

      {hasMoreComics ? (
        <button
          type='button'
          className={'btn btn-primary btn-shadow-light m-auto'}
          onClick={onLoadMore}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      ) : (
        <h3 style={{ color: 'white' }}>No More Comics!</h3>
      )}
    </section>
  )
}

export default ComicsList