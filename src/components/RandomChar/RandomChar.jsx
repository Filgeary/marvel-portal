import cn from 'clsx'
import React from 'react'
import styles from './RandomChar.module.css'

const RandomChar = () => {
  return (
    <div className={cn('container', styles.wrapper)}>
      <section className={styles.charSection}>
        <figure className='d-flex'>
          <img
            src='https://images.placeholders.dev/?width=270&height=270&bgColor=%231e90ff'
            alt='Random Char'
            style={{ maxHeight: '270px' }}
            className='flex-grow-1'
          />
        </figure>

        <div className='d-grid gap-2 p-2 pl-3'>
          <h2 className={styles.charTitle}>Random-Char</h2>
          <p>
            As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever
            made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled,
            oafish imbecile, he's quite...
          </p>

          <div className='d-flex gap-1 justify-content-space-between'>
            <a
              href='#charInfo'
              className='btn btn-primary'
            >
              Char Info
            </a>
            <a
              href='#charWiki'
              className='btn btn-secondary'
            >
              Char Wiki
            </a>
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
