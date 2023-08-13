import React from 'react'
import { IMAGE_VARIANT } from '../../constants'
import { transformComic } from '../../utils/apiAdapter'
import styles from './ComicProfile.module.css'

/**
 * @param {object} props
 * @param {import('../../types/IComic').IComic | null | undefined} props.comic
 */
const ComicProfile = ({ comic }) => {
  const {
    title,
    description,
    thumbnail,
    onsaleDate,
    printPrice,
    creatorWriter,
    creatorInker,
    creatorPenciler,
    creatorColorist,
  } = transformComic(comic, IMAGE_VARIANT['300x450']) ?? {}

  return (
    <article
      data-testid='comicProfile'
      className='p-3 d-grid align-items-start gap-5'
    >
      <div className={styles.wrapper}>
        <figure>
          <img
            src={thumbnail}
            alt={title}
            width={300}
            height={450}
          />
        </figure>

        <section className='d-flex flex-column gap-4 h-100 p-0 px-2 font-light'>
          <h2 className='text-gradient f-size-250'>{title}</h2>

          <div>
            <h3>Release:</h3>
            <p>{onsaleDate}</p>
          </div>
          <p>{description}</p>

          <div className='d-flex justify-space-between gap-2'>
            {creatorWriter && (
              <div>
                <h3>Writer:</h3>
                <p>{creatorWriter}</p>
              </div>
            )}
            {creatorInker && (
              <div>
                <h3>Inker:</h3>
                <p>{creatorInker}</p>
              </div>
            )}
            {creatorPenciler && (
              <div>
                <h3>Penciler:</h3>
                <p>{creatorPenciler}</p>
              </div>
            )}
            {creatorColorist && (
              <div>
                <h3>Colorist:</h3>
                <p>{creatorColorist}</p>
              </div>
            )}
          </div>

          <div className='m-top-auto'>
            <h3>Print Price:</h3>
            <p className='font-accent f-size-150'>{printPrice}</p>
          </div>
        </section>
      </div>

      <hr
        style={{ width: '60%', background: 'var(--cra-bg-grey)', border: 'none', height: '2px' }}
      />
    </article>
  )
}

export default ComicProfile
